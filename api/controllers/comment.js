import httpStatus from 'http-status';
import Issue from '../models/issue';


const create = (req, res) => {
  const id = req.params.id;
  const comment = { text: req.body.text };

  Issue.findByIdAndUpdateAsync(id, { $push: { comments: comment }})
    .then(updatedIssue => {
      if (!updatedIssue) {
        return res.status(httpStatus.NOT_FOUND).json({
          message: 'No such Issue'
        });
      }
      res.status(httpStatus.OK).json({
        message: 'Comment added successfully'
      });
    })
    .catch(err => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed adding a Comment'
      });
    });
};

const remove = (req, res) => {
  const id = req.params.id;
  const commentId = req.params.commentId;

  Issue.findByIdAndUpdateAsync(id, { $pull: { comments: { _id: commentId }}})
    .then(updatedIssue => {
      if (!updatedIssue) {
        return res.status(httpStatus.NOT_FOUND).json({
          message: 'No such Issue'
        });
      }
      res.status(httpStatus.OK).json({
        message: 'Comment removed successfully'
      });
    })
    .catch(err => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed removing a Comment'
      });
    });
};

export default { create, remove };
