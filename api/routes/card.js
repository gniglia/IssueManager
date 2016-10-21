import express from 'express';
import cardCtrl from '../controllers/card';
import commentCtrl from '../controllers/comment';

const router = express.Router();

router.route('/')
  .get(cardCtrl.list)
  .post(cardCtrl.create);

router.route('/:id')
  .get(cardCtrl.getById)
  .patch(cardCtrl.update)
  .delete(cardCtrl.remove);

router.route('/:id/comments')
  .post(commentCtrl.create);

router.route('/:id/comments/:commentId')
  .delete(commentCtrl.remove);

export default router;
