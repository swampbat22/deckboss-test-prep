import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  const { email } = req.body

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    line_items: [{
      price: 'price_1XYZABcdEfghIjkL',
      quantity: 1
    }],
    customer_email: email,
    success_url: 'https://deckboss.vercel.app/success',
    cancel_url: 'https://deckboss.vercel.app/cancel'
  })

  res.json({ id: session.id })
}
