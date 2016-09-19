import express from 'express';
import issueRoutes from './issue';

const router = express.Router();

router.get('/health-check', (req, res) => {
  res.send('OK');
});

router.use('/issues', issueRoutes);

export default router;
