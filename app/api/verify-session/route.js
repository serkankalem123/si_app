// app/api/verify-session/route.js
// Called by the mobile app after payment to verify the checkout session
// and update the user's premium status directly (doesn't rely on webhook timing)
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
        const body = await request.json();
        const { userId, email } = body;

        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🔍 VERIFY SESSION');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('   userId:', userId);
        console.log('   email:', email);

        if (!userId) {
            return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
        }

        // Find the customer's most recent successful checkout session
        // Search by email or customer metadata
        const sessions = await stripe.checkout.sessions.list({
            limit: 5,
            status: 'complete',
        });

        // Find session matching this user
        let matchingSession = null;
        for (const session of sessions.data) {
            if (
                session.metadata?.userId === userId ||
                session.metadata?.supabase_user_id === userId ||
                session.customer_email === email
            ) {
                matchingSession = session;
                break;
            }
        }

        if (!matchingSession) {
            console.log('❌ No matching completed session found');
            return NextResponse.json({
                verified: false,
                error: 'No completed checkout session found'
            }, { status: 404 });
        }

        console.log('✅ Found matching session:', matchingSession.id);
        console.log('   Customer:', matchingSession.customer);
        console.log('   Subscription:', matchingSession.subscription);

        // Update Supabase profile to premium
        const { error: updateError } = await supabaseAdmin
            .from('profiles')
            .update({
                is_premium: true,
                stripe_customer_id: matchingSession.customer,
                subscription_id: matchingSession.subscription,
                premium_since: new Date().toISOString(),
                subscription_status: 'active',
                subscription_cancel_at: null,
                updated_at: new Date().toISOString()
            })
            .eq('id', userId);

        if (updateError) {
            console.error('❌ Supabase update error:', updateError);
            return NextResponse.json({
                verified: false,
                error: 'Failed to update profile'
            }, { status: 500 });
        }

        // Also update auth metadata
        await supabaseAdmin.auth.admin.updateUserById(
            userId,
            {
                user_metadata: {
                    is_premium: true,
                    stripe_customer_id: matchingSession.customer,
                    subscription_id: matchingSession.subscription,
                    premium_since: new Date().toISOString(),
                    subscription_status: 'active',
                }
            }
        );

        console.log('🎉 USER VERIFIED AND UPGRADED TO PREMIUM');

        return NextResponse.json({
            verified: true,
            isPremium: true
        });

    } catch (err) {
        console.error('❌ Verify session error:', err);
        return NextResponse.json(
            { error: err.message || 'Verification failed' },
            { status: 500 }
        );
    }
}

// CORS
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
