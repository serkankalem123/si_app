// app/api/create-portal-session/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { customerId } = body;

    if (!customerId) {
      return NextResponse.json(
        { error: 'Customer ID is required' },
        { status: 400 }
      );
    }

    // ✅ List all configurations to debug
    const configs = await stripe.billingPortal.configurations.list();
    console.log('📋 Available portal configurations:', configs.data.length);
    
    configs.data.forEach((config, index) => {
      console.log(`Config ${index + 1}:`, {
        id: config.id,
        is_default: config.is_default,
        subscription_cancel_enabled: config.features?.subscription_cancel?.enabled,
        active: config.active,
      });
    });

    // Find the configuration with cancellation enabled
    const configWithCancel = configs.data.find(
      c => c.features?.subscription_cancel?.enabled === true
    );

    if (!configWithCancel) {
      console.warn('⚠️ No configuration found with cancellation enabled!');
    } else {
      console.log('✅ Using configuration:', configWithCancel.id);
    }

    // Create portal session
    const sessionConfig = {
      customer: customerId,
      return_url: `${request.headers.get('origin')}/?nav=profile`,
    };

    // ✅ Use the config with cancellation if found
    if (configWithCancel) {
      sessionConfig.configuration = configWithCancel.id;
    }

    console.log('🔧 Creating portal session with config:', sessionConfig);

    const session = await stripe.billingPortal.sessions.create(sessionConfig);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Portal session error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}