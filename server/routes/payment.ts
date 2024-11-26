import express from 'express';
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();
const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16'
});

router.post('/create-payment', authenticateToken, async (req, res) => {
  try {
    const { policyId, amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: 'usd'
    });

    const payment = await prisma.payment.create({
      data: {
        amount,
        status: 'PENDING',
        policyId,
        stripeId: paymentIntent.id
      }
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      payment
    });
  } catch (error) {
    res.status(500).json({ message: 'Payment creation failed' });
  }
});

router.post('/confirm-payment', authenticateToken, async (req, res) => {
  try {
    const { paymentId } = req.body;

    const payment = await prisma.payment.update({
      where: { id: paymentId },
      data: { status: 'COMPLETED' }
    });

    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Payment confirmation failed' });
  }
});

export default router;