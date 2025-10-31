/**
 * Full Stripe + Supabase Server Integration
 * ------------------------------------------
 * Endpoints:
 *  POST /create-checkout-session
 *  POST /create-portal-session
 *  POST /webhook
 */

import express from "express"
import Stripe from "stripe"
import bodyParser from "body-parser"
import { createClient } from "@supabase/supabase-js"
import cors from "cors"

// ----- CONFIG -----
const app = express()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

app.use(cors({ origin: "*" }))
app.use(express.json())

// ✅ CREATE CHECKOUT SESSION (user upgrades)
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { email } = req.body
    if (!email) return res.status(400).json({ error: "Email required" })

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          // price: process.env.STRIPE_PRICE_ID,
          price: 'price_1SOHe8RpPxkU3l7HkY8HhaFx',
          quantity: 1,
        },
      ],
      success_url: "https://si-app-sigma.vercel.app/account?success=true",
      cancel_url: "https://si-app-sigma.vercel.app/account?canceled=true",
    })

    return res.json({ url: session.url })
  } catch (err) {
    console.error("❌ Error creating checkout session:", err)
    res.status(500).json({ error: err.message })
  }
})

// ✅ CREATE BILLING PORTAL SESSION (user manages/cancels)
app.post("/create-portal-session", async (req, res) => {
  try {
    const { customerId } = req.body
    if (!customerId)
      return res.status(400).json({ error: "Missing customerId" })

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: "https://si-app-sigma.vercel.app/account",
    })

    res.json({ url: session.url })
  } catch (err) {
    console.error("❌ Error creating portal session:", err)
    res.status(500).json({ error: err.message })
  }
})

// ✅ STRIPE WEBHOOK (keeps Supabase in sync)
app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"]
    let event

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      )
    } catch (err) {
      console.error("⚠️ Webhook signature failed:", err.message)
      return res.status(400).send(`Webhook Error: ${err.message}`)
    }

    const data = event.data.object

    try {
      // ✅ Handle successful subscription
      if (event.type === "checkout.session.completed") {
        const customerId = data.customer
        const email = data.customer_email

        if (email) {
          await supabase
            .from("profiles")
            .update({ is_premium: true, stripe_customer_id: customerId })
            .eq("email", email)
        } else {
          await supabase
            .from("profiles")
            .update({ is_premium: true })
            .eq("stripe_customer_id", customerId)
        }

        console.log("✅ User upgraded to Premium:", email || customerId)
      }

      // ✅ Handle subscription cancellation
      if (event.type === "customer.subscription.deleted") {
        const customerId = data.customer
        await supabase
          .from("profiles")
          .update({ is_premium: false })
          .eq("stripe_customer_id", customerId)

        console.log("🚫 Subscription canceled:", customerId)
      }

      res.status(200).send("ok")
    } catch (err) {
      console.error("❌ Error processing webhook:", err.message)
      res.status(500).send("Webhook handler failed")
    }
  }
)

// ✅ HEALTH CHECK
app.get("/", (req, res) => {
  res.send("✅ Stripe + Supabase Server running")
})

// ✅ START SERVER
const PORT = process.env.PORT || 4242
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
