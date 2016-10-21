import httpStatus from 'http-status';
import Card from '../models/card';

const create = (req, res) => {
  const id = req.params.id;
  const comment = { text: req.body.text };

setTimeout(() => {

  Card.findByIdAndUpdateAsync(id, { $push: { comments: comment }}, { new: true})
    .then(updatedCard => {
      if (!updatedCard) {
        return res.status(httpStatus.NOT_FOUND).json({
          message: 'No such Card'
        });
      }
      res.status(httpStatus.OK).json(updatedCard);
    })
    .catch(err => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed adding a Comment'
      });
    });

}, 1000)
};

const remove = (req, res) => {
  const id = req.params.id;
  const commentId = req.params.commentId;

  Card.findOneAndUpdateAsync({ comments: { $elemMatch: { _id: commentId }}},
                              { $pull: { comments: { _id: commentId }}},
                              { new: true})
    .then(updatedCard => {
      if (!updatedCard) {
        return res.status(httpStatus.NOT_FOUND).json({
          message: 'No such Card/Comment'
        });
      }
      res.status(httpStatus.OK).json(updatedCard);
    })
    .catch(err => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed removing a Comment'
      });
    });
};

export default { create, remove };
