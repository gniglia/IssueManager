import express from 'express';
import issueCtrl from '../controllers/issue';
import commentCtrl from '../controllers/comment';

const router = express.Router();

router.route('/')
  .get(issueCtrl.list)
  .post(issueCtrl.create);

router.route('/:id')
  .get(issueCtrl.getById)
  .patch(issueCtrl.update)
  .delete(issueCtrl.remove);

router.route('/:id/comments')
  .post(commentCtrl.create);

router.route('/:id/comments/:commentId')
  .delete(commentCtrl.remove);

export default router;
