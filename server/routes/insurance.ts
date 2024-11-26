import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/policies', authenticateToken, async (req, res) => {
  try {
    const policies = await prisma.policy.findMany({
      where: { userId: req.user.id },
      include: { claims: true, payments: true }
    });
    res.json(policies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/policies', authenticateToken, async (req, res) => {
  try {
    const { type, coverage, premium } = req.body;
    
    const policy = await prisma.policy.create({
      data: {
        type,
        coverage,
        premium,
        startDate: new Date(),
        endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
        status: 'ACTIVE',
        userId: req.user.id
      }
    });
    
    res.json(policy);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;