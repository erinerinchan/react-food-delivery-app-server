/* eslint-disable camelcase */
import Stripe from 'stripe'

const stripe = Stripe('sk_test_51M315gB4AFqtgwWUQjrIDzwfQVhRkFk3CqQECeyzKextiKBl7VCLfJSYjxNrQjhxhcEXio5OAGxGbjJDaEHz38Va00V7vA3Z3M')

const createPaymentIntent = async (req, res) => {
  console.log('--- Creating Payment Intent')

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 10000,
      currency: 'hkd'
    })

    return res.status(200).json({
      clientSecret: paymentIntent.client_secret
    })
  } catch (err) {
    console.error('--- Error in Creating Payment Intent', err)
    // eslint-disable-next-line no-undef
    return handleErrors(res, err)
  }
}

export default createPaymentIntent
