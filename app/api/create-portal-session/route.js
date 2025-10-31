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

    // Create portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${request.headers.get('origin')}/?nav=profile`,
    });

    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error('Portal session error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}