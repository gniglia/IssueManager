import express from 'express';
import issueCtrl from '../controllers/issue';

const router = express.Router();

router.route('/')
  .get(issueCtrl.list)
  .post(issueCtrl.create);

router.get('/:id', (req, res) => {
  res.send('This is the path to Issue: '+ req.params.id);
});

export default router;
