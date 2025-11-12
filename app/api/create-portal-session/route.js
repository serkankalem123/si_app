// app/api/create-portal-session/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export async function POST(request) {
  try {
    console.log('🔵 Creating Stripe Customer Portal session...');

    const body = await request.json();
    const { customerId } = body;

    if (!customerId) {
      console.error('❌ Missing customerId');
      return NextResponse.json(
        { error: 'Customer ID is required' },
        { status: 400 }
      );
    }

    // Get origin for return URL
    const origin = request.headers.get('origin') || 
                   process.env.NEXT_PUBLIC_SITE_URL || 
                   'https://si-app.sigma.vercel.app';

    console.log('🔵 Customer ID:', customerId);
    console.log('🔵 Origin:', origin);

    // ✅ List all configurations to debug
    const configs = await stripe.billingPortal.configurations.list();
    console.log('📋 Available portal configurations:', configs.data.length);
    
    configs.data.forEach((config, index) => {
      console.log(`Config ${index + 1}:`, {
        id: config.id,
        is_default: config.is_default,
        subscription_cancel_enabled: config.features?.subscription_cancel?.enabled,
        subscription_update_enabled: config.features?.subscription_update?.enabled,
        active: config.active,
      });
    });

    // Find the configuration with cancellation enabled
    const configWithCancel = configs.data.find(
      c => c.features?.subscription_cancel?.enabled === true
    );

    if (!configWithCancel) {
      console.warn('⚠️ No configuration found with cancellation enabled!');
      console.warn('⚠️ Users will not be able to cancel their subscription');
    } else {
      console.log('✅ Using configuration:', configWithCancel.id);
    }

    // Create portal session configuration
    const sessionConfig = {
      customer: customerId,
      return_url: `${origin}/?nav=profile&updated=true`,
    };

    // ✅ Use the config with cancellation if found
    if (configWithCancel) {
      sessionConfig.configuration = configWithCancel.id;
    }

    console.log('🔧 Creating portal session with config:', {
      customer: sessionConfig.customer,
      return_url: sessionConfig.return_url,
      configuration: sessionConfig.configuration || 'default',
    });

    const session = await stripe.billingPortal.sessions.create(sessionConfig);

    console.log('✅ Portal session created:', session.id);
    console.log('✅ Portal URL:', session.url);

    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error('❌ Portal session error:', error);
    console.error('❌ Error details:', {
      type: error.type,
      message: error.message,
      code: error.code,
    });
    
    return NextResponse.json(
      { error: error.message || 'Failed to create portal session' },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}