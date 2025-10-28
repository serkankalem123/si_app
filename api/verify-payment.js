// File: /api/verify-payment.js
// Call this after user returns from Stripe to check and update premium status

import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { sessionId, userId } = req.body

  if (!sessionId || !userId) {
    return res.status(400).json({ 
      error: 'Missing sessionId or userId',
      received: { sessionId, userId }
    })
  }

  console.log(`Verifying payment for session ${sessionId} and user ${userId}`)

  try {
    // 1. Get the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    
    console.log('Session retrieved:', {
      id: session.id,
      payment_status: session.payment_status,
      customer_email: session.customer_email
    })

    // 2. Check if payment was successful
    if (session.payment_status !== 'paid') {
      console.log('Payment not yet completed, status:', session.payment_status)
      return res.status(200).json({
        success: false,
        message: 'Payment not completed',
        payment_status: session.payment_status
      })
    }

    console.log('✓ Payment confirmed as paid!')

    // 3. Update user as premium in Supabase
    const { data: updatedUser, error: updateError } = await supabase.auth.admin.updateUserById(userId, {
      user_metadata: {
        is_premium: true,
        premium_since: new Date().toISOString(),
        stripe_customer_id: session.customer,
        stripe_session_id: session.id,
        payment_verified: true,
        verification_timestamp: new Date().toISOString()
      }
    })

    if (updateError) {
      console.error('Error updating user metadata:', updateError)
      return res.status(500).json({
        error: 'Failed to update user premium status',
        details: updateError.message
      })
    }

    console.log('✓ User successfully marked as premium')
    console.log('Updated metadata:', updatedUser.user.user_metadata)

    // 4. Log the payment
    try {
      await supabase.from('payments').insert({
        user_id: userId,
        stripe_session_id: session.id,
        stripe_payment_intent: session.payment_intent,
        amount: session.amount_total,
        currency: session.currency,
        status: session.payment_status,
        customer_email: session.customer_email,
        created_at: new Date().toISOString()
      })
      console.log('Payment logged to database')
    } catch (logErr) {
      console.warn('Could not log payment:', logErr.message)
    }

    return res.status(200).json({
      success: true,
      message: 'Payment verified and user marked as premium',
      user: {
        id: updatedUser.user.id,
        email: updatedUser.user.email,
        is_premium: true,
        metadata: updatedUser.user.user_metadata
      }
    })

  } catch (error) {
    console.error('Error verifying payment:', error)
    return res.status(500).json({
      error: error.message,
      type: error.type
    })
  }
}