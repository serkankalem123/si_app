// app/api/stripe-webhook/route.js
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create Supabase admin client
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    console.log('=== Webhook Received ===');
    console.log('Webhook secret exists:', !!process.env.STRIPE_WEBHOOK_SECRET);

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      console.error('❌ STRIPE_WEBHOOK_SECRET is missing');
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      );
    }

    let event;

    try {
      // Verify the webhook signature
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
      
      console.log('Checkout completed:', {
        sessionId: session.id,
        email: session.customer_email,
        metadata: session.metadata
      });

      const userId = session.metadata?.userId || session.metadata?.supabase_user_id;

      if (!userId) {
        console.error('❌ No userId found in metadata');
        return NextResponse.json(
          { error: 'No userId in metadata' },
          { status: 400 }
        );
      }

      console.log('Updating user to premium:', userId);

      // Update user metadata in Supabase Auth
      const { data, error } = await supabaseAdmin.auth.admin.updateUserById(
        userId,
        {
          user_metadata: {
            is_premium: true,
            stripe_customer_id: session.customer,
            subscription_id: session.subscription,
            premium_since: new Date().toISOString()
          }
        }
      );

      if (error) {
        console.error('❌ Error updating user:', error);
        return NextResponse.json(
          { error: 'Failed to update user' },
          { status: 500 }
        );
      }

      console.log('✅ User upgraded to premium successfully');
      console.log('Updated user data:', data);
    }

    // Handle subscription cancellation
    if (event.type === 'customer.subscription.deleted') {
      const subscription = event.data.object;
      
      console.log('Subscription cancelled:', subscription.id);

      // Query to find user with this subscription ID
      const { data: { users }, error: listError } = await supabaseAdmin.auth.admin.listUsers();

      if (listError) {
        console.error('Error listing users:', listError);
      } else {
        // Find user with matching subscription_id in metadata
        const user = users.find(u => 
          u.user_metadata?.subscription_id === subscription.id
        );

        if (user) {
          await supabaseAdmin.auth.admin.updateUserById(
            user.id,
            {
              user_metadata: {
                is_premium: false,
                subscription_cancelled: new Date().toISOString()
              }
            }
          );
          console.log('✅ User premium access removed:', user.id);
        } else {
          console.log('⚠️ No user found with subscription:', subscription.id);
        }
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