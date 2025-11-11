// app/api/stripe-webhook/route.js
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    console.log('=== Webhook Received ===');

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      console.error('❌ STRIPE_WEBHOOK_SECRET is missing');
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      );
    }

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error('⚠️ Webhook signature verification failed:', err.message);
      return NextResponse.json(
        { error: `Webhook Error: ${err.message}` },
        { status: 400 }
      );
    }

    console.log('✅ Webhook verified. Event type:', event.type);

    // Handle successful checkout
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      
      console.log('💰 Checkout completed:', {
        sessionId: session.id,
        email: session.customer_email,
        metadata: session.metadata
      });

      const userId = session.metadata?.userId || session.metadata?.supabase_user_id;

      if (!userId) {
        console.error('❌ No userId in metadata');
        return NextResponse.json({ error: 'No userId in metadata' }, { status: 400 });
      }

      console.log('🔄 Updating user to premium:', userId);

      // Update auth metadata
      await supabaseAdmin.auth.admin.updateUserById(
        userId,
        {
          user_metadata: {
            is_premium: true,
            stripe_customer_id: session.customer,
            subscription_id: session.subscription,
            premium_since: new Date().toISOString(),
            subscription_status: 'active',
          }
        }
      );

      // Update profiles table
      await supabaseAdmin
        .from('profiles')
        .update({
          is_premium: true,
          stripe_customer_id: session.customer,
          subscription_id: session.subscription,
          premium_since: new Date().toISOString(),
          subscription_status: 'active',
          subscription_cancel_at: null,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId);

      console.log('🎉 USER UPGRADED TO PREMIUM SUCCESSFULLY');
    }

    // Handle subscription updated (e.g., when user cancels but keeps access until period end)
    if (event.type === 'customer.subscription.updated') {
      const subscription = event.data.object;
      
      console.log('📝 Subscription updated:', subscription.id);

      // Find user with this subscription ID
      const { data: profile } = await supabaseAdmin
        .from('profiles')
        .select('id')
        .eq('subscription_id', subscription.id)
        .single();

      if (profile) {
        const isCanceling = subscription.cancel_at_period_end;
        const cancelAt = subscription.cancel_at 
          ? new Date(subscription.cancel_at * 1000).toISOString()
          : null;

        console.log(`${isCanceling ? '⚠️' : '✅'} Subscription ${isCanceling ? 'will be canceled' : 'is active'}`);
        if (cancelAt) console.log('📅 Cancel at:', cancelAt);

        // Update auth metadata
        await supabaseAdmin.auth.admin.updateUserById(
          profile.id,
          {
            user_metadata: {
              subscription_status: isCanceling ? 'canceling' : 'active',
              subscription_cancel_at: cancelAt,
            }
          }
        );

        // Update profile
        await supabaseAdmin
          .from('profiles')
          .update({
            subscription_status: isCanceling ? 'canceling' : 'active',
            subscription_cancel_at: cancelAt,
            updated_at: new Date().toISOString()
          })
          .eq('id', profile.id);
      }
    }

    // Handle subscription deletion (when it actually expires)
    if (event.type === 'customer.subscription.deleted') {
      const subscription = event.data.object;
      
      console.log('🚫 Subscription deleted:', subscription.id);

      // Find user with this subscription ID
      const { data: profile } = await supabaseAdmin
        .from('profiles')
        .select('id')
        .eq('subscription_id', subscription.id)
        .single();

      if (profile) {
        // Update auth metadata
        await supabaseAdmin.auth.admin.updateUserById(
          profile.id,
          {
            user_metadata: {
              is_premium: false,
              subscription_status: 'canceled',
              subscription_cancelled: new Date().toISOString()
            }
          }
        );

        // Update profile
        await supabaseAdmin
          .from('profiles')
          .update({
            is_premium: false,
            subscription_status: 'canceled',
            subscription_cancel_at: null,
            updated_at: new Date().toISOString()
          })
          .eq('id', profile.id);

        console.log('✅ User premium access removed:', profile.id);
      }
    }

    return NextResponse.json({ received: true });

  } catch (err) {
    console.error('❌ Webhook handler error:', err);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 500 }
    );
  }
}