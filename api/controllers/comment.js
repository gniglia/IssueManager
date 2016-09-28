import httpStatus from 'http-status';
import Issue from '../models/issue';

const create = (req, res) => {
  const id = req.params.id;
  const comment = { text: req.body.text };

setTimeout(() => {

  Issue.findByIdAndUpdateAsync(id, { $push: { comments: comment }}, { new: true})
    .then(updatedIssue => {
      if (!updatedIssue) {
        return res.status(httpStatus.NOT_FOUND).json({
          message: 'No such Issue'
        });
      }
      res.status(httpStatus.OK).json(updatedIssue);
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

  Issue.findOneAndUpdateAsync({ comments: { $elemMatch: { _id: commentId }}},
                              { $pull: { comments: { _id: commentId }}},
                              { new: true})
    .then(updatedIssue => {
      if (!updatedIssue) {
        return res.status(httpStatus.NOT_FOUND).json({
          message: 'No such Issue/Comment'
        });
      }
      res.status(httpStatus.OK).json(updatedIssue);
    })
    .catch(err => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed removing a Comment'
      });
    });
};

export default { create, remove };
