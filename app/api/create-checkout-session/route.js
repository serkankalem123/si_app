// app/api/create-checkout-session/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Log environment check
    console.log('=== Stripe Checkout Debug ===');
    console.log('STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY);
    console.log('STRIPE_SECRET_KEY prefix:', process.env.STRIPE_SECRET_KEY?.substring(0, 10));
    
    // Check if Stripe key exists
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('❌ STRIPE_SECRET_KEY is missing from environment variables');
      return NextResponse.json(
        { error: 'Stripe configuration error - missing API key' },
        { status: 500 }
      );
    }

    // Dynamic import of Stripe to avoid initialization issues
    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16', // Use a specific API version
    });

    // Parse and validate request body
    const body = await request.json();
    console.log('Request body:', body);
    
    const { userId, email } = body;

    if (!userId || !email) {
      console.error('❌ Missing userId or email');
      return NextResponse.json(
        { error: 'Missing required fields: userId and email' },
        { status: 400 }
      );
    }

    // Get origin for redirect URLs
    const origin = request.headers.get('origin') || 'http://localhost:3000';
    console.log('Origin:', origin);

    // Verify price ID exists
    const priceId = process.env.STRIPE_PRICE_ID;
    if (!priceId) {
      console.error('❌ STRIPE_PRICE_ID is missing from environment variables');
      return NextResponse.json(
        { error: 'Stripe price configuration error' },
        { status: 500 }
      );
    }

    console.log('Using price ID:', priceId);

    // Create checkout session
    console.log('Creating Stripe checkout session...');
    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/profile`,
      metadata: { 
        userId,
        supabase_user_id: userId 
      },
      subscription_data: {
        metadata: {
          userId,
          supabase_user_id: userId
        }
      }
    });

    console.log('✅ Checkout session created:', session.id);
    console.log('Checkout URL:', session.url);

    return NextResponse.json({ 
      url: session.url,
      sessionId: session.id 
    });

  } catch (err) {
    console.error('❌ Stripe API Error:', err);
    console.error('Error type:', err.type);
    console.error('Error code:', err.code);
    console.error('Error message:', err.message);
    console.error('Full error:', JSON.stringify(err, null, 2));

    return NextResponse.json(
      { 
        error: err.message || 'Failed to create checkout session',
        type: err.type,
        code: err.code
      },
      { status: 500 }
    );
  }
}