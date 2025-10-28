// /api/stripe/create-checkout-session.js
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { userEmail } = req.body

    if (!userEmail) {
      return res.status(400).json({ error: "User email is required" })
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: userEmail,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Premium Subscription",
              description: "Monthly access to premium features",
            },
            unit_amount: 999, // $9.99 in cents
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/profile`,
      metadata: {
        userEmail: userEmail,
      },
    })

    return res.status(200).json({ url: session.url })
  } catch (error) {
    console.error("Stripe error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}