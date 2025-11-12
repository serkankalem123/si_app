// app/api/stripe-webhook/route.js
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Helper function to find user by subscription or customer ID
async function findUserBySubscription(subscription) {
  console.log('🔍 Looking up user...');
  console.log('   Subscription ID:', subscription.id);
  console.log('   Customer ID:', subscription.customer);
  console.log('   Metadata:', subscription.metadata);

  // Try 1: Look up by metadata userId
  let userId = subscription.metadata?.userId || subscription.metadata?.supabase_user_id;
  
  if (userId) {
    console.log('✅ Found userId in metadata:', userId);
    return userId;
  }

  // Try 2: Look up by subscription_id in database
  const { data: profileBySubId } = await supabaseAdmin
    .from('profiles')
    .select('id')
    .eq('subscription_id', subscription.id)
    .maybeSingle();

  if (profileBySubId) {
    console.log('✅ Found user by subscription_id:', profileBySubId.id);
    return profileBySubId.id;
  }

  // Try 3: Look up by stripe_customer_id
  const { data: profileByCustomerId } = await supabaseAdmin
    .from('profiles')
    .select('id')
    .eq('stripe_customer_id', subscription.customer)
    .maybeSingle();

  if (profileByCustomerId) {
    console.log('✅ Found user by stripe_customer_id:', profileByCustomerId.id);
    return profileByCustomerId.id;
  }

  console.error('❌ Could not find user for subscription');
  return null;
}

export async function POST(request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🎯 WEBHOOK RECEIVED');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

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

    console.log('✅ Webhook verified');
    console.log('📋 Event type:', event.type);
    console.log('📋 Event ID:', event.id);

    // Handle successful checkout
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('💰 CHECKOUT COMPLETED');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('   Session ID:', session.id);
      console.log('   Email:', session.customer_email);
      console.log('   Customer ID:', session.customer);
      console.log('   Subscription ID:', session.subscription);
      console.log('   Metadata:', session.metadata);

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
      
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📝 SUBSCRIPTION UPDATED');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('   Subscription ID:', subscription.id);
      console.log('   Status:', subscription.status);
      console.log('   Cancel at period end:', subscription.cancel_at_period_end);
      console.log('   Cancel at:', subscription.cancel_at);

      const userId = await findUserBySubscription(subscription);

      if (!userId) {
        console.error('❌ Could not find user for subscription');
        return NextResponse.json({ error: 'User not found' }, { status: 400 });
      }

      const isCanceling = subscription.cancel_at_period_end;
      const cancelAt = subscription.cancel_at 
        ? new Date(subscription.cancel_at * 1000).toISOString()
        : null;

      console.log(`${isCanceling ? '⚠️' : '✅'} Subscription ${isCanceling ? 'will be canceled' : 'is active'}`);
      if (cancelAt) console.log('📅 Cancel at:', cancelAt);

      // Update auth metadata
      await supabaseAdmin.auth.admin.updateUserById(
        userId,
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
        .eq('id', userId);

      console.log('✅ Subscription status updated');
    }

    // Handle subscription deletion (when it actually expires)
    if (event.type === 'customer.subscription.deleted') {
      const subscription = event.data.object;
      
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('🚫 SUBSCRIPTION DELETED');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('   Subscription ID:', subscription.id);
      console.log('   Customer ID:', subscription.customer);

      const userId = await findUserBySubscription(subscription);

      if (!userId) {
        console.error('❌ Could not find user for subscription');
        return NextResponse.json({ error: 'User not found' }, { status: 400 });
      }

      console.log('🔄 Removing premium access for user:', userId);

      // Update auth metadata
      await supabaseAdmin.auth.admin.updateUserById(
        userId,
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
        .eq('id', userId);

      console.log('✅ USER PREMIUM ACCESS REMOVED SUCCESSFULLY');
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ WEBHOOK PROCESSED SUCCESSFULLY');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    return NextResponse.json({ received: true });

  } catch (err) {
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('❌ WEBHOOK HANDLER ERROR');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('Error:', err);
    console.error('Stack:', err.stack);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 500 }
    );
  }
}