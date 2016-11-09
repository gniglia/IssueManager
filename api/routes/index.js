import express from 'express';
import cardRoutes from './card';

const router = express.Router();

router.get('/health-check', (req, res) => {
  res.send('OK');
});

router.use('/cards', cardRoutes);

export default router;
