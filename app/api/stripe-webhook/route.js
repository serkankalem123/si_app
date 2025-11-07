// app/api/stripe-webhook/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// Initialize Supabase with service role key for admin access
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🎯 WEBHOOK RECEIVED');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  console.log('📝 Body length:', body.length);
  console.log('🔑 Signature present:', !!signature);
  console.log('🔑 Webhook secret configured:', !!process.env.STRIPE_WEBHOOK_SECRET);

  if (!signature) {
    console.error('❌ No signature found in request headers');
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    console.log('✅ Webhook signature verified');
    console.log('📋 Event type:', event.type);
    console.log('📋 Event ID:', event.id);
  } catch (err) {
    console.error('❌ Webhook signature verification failed');
    console.error('Error message:', err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle the event
  try {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('⚙️  PROCESSING EVENT:', event.type);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        console.log('💳 Checkout Session Details:');
        console.log('   - Session ID:', session.id);
        console.log('   - Customer Email:', session.customer_email);
        console.log('   - Customer ID:', session.customer);
        console.log('   - Subscription ID:', session.subscription);
        console.log('   - Metadata:', JSON.stringify(session.metadata, null, 2));
        
        const userId = session.metadata?.userId || session.metadata?.supabase_user_id;
        
        if (!userId) {
          console.error('❌ CRITICAL: No userId found in session metadata');
          console.error('Available metadata:', session.metadata);
          return NextResponse.json({ error: 'No userId found' }, { status: 400 });
        }

        console.log('👤 User ID found:', userId);

        // Get subscription details if available
        const subscriptionId = session.subscription;
        console.log('📋 Subscription ID:', subscriptionId);

        // Check if user exists before updating
        const { data: existingUser, error: checkError } = await supabase
          .from('profiles')
          .select('id, email, is_premium')
          .eq('id', userId)
          .single();

        if (checkError) {
          console.error('❌ Error checking user:', checkError);
        } else {
          console.log('✅ User found:', existingUser);
        }

        // Update user profile in database
        console.log('🔄 Updating profile table...');
        const { data: updateData, error: updateError } = await supabase
          .from('profiles')
          .update({
            is_premium: true,
            subscription_status: 'active',
            stripe_customer_id: session.customer,
            stripe_subscription_id: subscriptionId,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId)
          .select();

        if (updateError) {
          console.error('❌ ERROR UPDATING PROFILE:', updateError);
          console.error('Error details:', JSON.stringify(updateError, null, 2));
          throw updateError;
        }

        console.log('✅ PROFILE UPDATED SUCCESSFULLY');
        console.log('Updated data:', JSON.stringify(updateData, null, 2));

        // Update auth metadata
        console.log('🔄 Updating auth metadata...');
        const { data: authData, error: authError } = await supabase.auth.admin.updateUserById(
          userId,
          {
            user_metadata: {
              is_premium: true,
              subscription_status: 'active',
            }
          }
        );

        if (authError) {
          console.error('❌ Error updating auth metadata:', authError);
        } else {
          console.log('✅ AUTH METADATA UPDATED SUCCESSFULLY');
        }

        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('✅ CHECKOUT COMPLETED SUCCESSFULLY');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        console.log('🔄 Subscription Update Details:');
        console.log('   - Subscription ID:', subscription.id);
        console.log('   - Status:', subscription.status);
        console.log('   - Customer:', subscription.customer);
        console.log('   - Metadata:', JSON.stringify(subscription.metadata, null, 2));

        const userId = subscription.metadata?.userId || subscription.metadata?.supabase_user_id;

        if (!userId) {
          console.error('❌ No userId in subscription metadata');
          console.error('Available metadata:', subscription.metadata);
          return NextResponse.json({ error: 'No userId found' }, { status: 400 });
        }

        console.log('👤 User ID:', userId);

        const isPremium = subscription.status === 'active' || subscription.status === 'trialing';
        console.log('💎 Is Premium:', isPremium);

        const { data: updateData, error: updateError } = await supabase
          .from('profiles')
          .update({
            is_premium: isPremium,
            subscription_status: subscription.status,
            subscription_cancel_at: subscription.cancel_at 
              ? new Date(subscription.cancel_at * 1000).toISOString()
              : null,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId)
          .select();

        if (updateError) {
          console.error('❌ Error updating profile:', updateError);
          throw updateError;
        }

        console.log('✅ Profile updated:', updateData);

        // Update auth metadata
        await supabase.auth.admin.updateUserById(userId, {
          user_metadata: {
            is_premium: isPremium,
            subscription_status: subscription.status,
          }
        });

        console.log('✅ SUBSCRIPTION UPDATED SUCCESSFULLY');
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        console.log('❌ Subscription Deletion:');
        console.log('   - Subscription ID:', subscription.id);
        console.log('   - Metadata:', JSON.stringify(subscription.metadata, null, 2));

        const userId = subscription.metadata?.userId || subscription.metadata?.supabase_user_id;

        if (!userId) {
          console.error('❌ No userId in subscription metadata');
          return NextResponse.json({ error: 'No userId found' }, { status: 400 });
        }

        const { data: updateData, error: updateError } = await supabase
          .from('profiles')
          .update({
            is_premium: false,
            subscription_status: 'canceled',
            subscription_cancel_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId)
          .select();

        if (updateError) {
          console.error('❌ Error updating profile:', updateError);
          throw updateError;
        }

        console.log('✅ Profile updated:', updateData);

        // Update auth metadata
        await supabase.auth.admin.updateUserById(userId, {
          user_metadata: {
            is_premium: false,
            subscription_status: 'canceled',
          }
        });

        console.log('✅ SUBSCRIPTION CANCELED SUCCESSFULLY');
        break;
      }

      case 'invoice.payment_succeeded': {
        console.log('✅ Payment succeeded for invoice:', event.data.object.id);
        break;
      }

      case 'invoice.payment_failed': {
        console.log('❌ Payment failed for invoice:', event.data.object.id);
        break;
      }

      default:
        console.log(`⚠️  Unhandled event type: ${event.type}`);
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ WEBHOOK PROCESSED SUCCESSFULLY');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    return NextResponse.json({ received: true, processed: true });

  } catch (err) {
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('❌ CRITICAL ERROR PROCESSING WEBHOOK');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('Error:', err);
    console.error('Stack:', err.stack);
    return NextResponse.json(
      { error: `Webhook handler failed: ${err.message}` },
      { status: 500 }
    );
  }
}