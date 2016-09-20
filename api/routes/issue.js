import express from 'express';
import issueCtrl from '../controllers/issue';

const router = express.Router();

router.route('/')
  .get(issueCtrl.list)
  .post(issueCtrl.create);

router.route('/:id')
  .get(issueCtrl.getById)
  .delete(issueCtrl.remove);

export default router;
