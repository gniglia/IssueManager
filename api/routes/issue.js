import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is the root of Issues.');
});

router.get('/:id', (req, res) => {
  res.send('This is the path to Issue: '+ req.params.id);
});

export default router;
