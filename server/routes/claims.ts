import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/submit', authenticateToken, async (req, res) => {
  try {
    const { policyId, amount, description, documents } = req.body;

    const claim = await prisma.claim.create({
      data: {
        amount,
        description,
        documents,
        status: 'PENDING',
        userId: req.user.id,
        policyId
      }
    });

    res.json(claim);
  } catch (error) {
    res.status(500).json({ message: 'Claim submission failed' });
  }
});

router.get('/user-claims', authenticateToken, async (req, res) => {
  try {
    const claims = await prisma.claim.findMany({
      where: { userId: req.user.id },
      include: { policy: true }
    });
    res.json(claims);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch claims' });
  }
});

export default router;