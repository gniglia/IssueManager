import httpStatus from 'http-status';
import Issue from '../models/issue';


const list = (req, res) => {
  Issue.findAsync()
    .then(issues => res.status(httpStatus.OK).json(issues))
    .catch(err => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Internal server error'
      });
    });
};

const create = (req, res) => {
  const issue = new Issue(req.body);

  setTimeout(() => {

    issue.saveAsync()
      .then(savedIssue => res.status(httpStatus.CREATED).json(savedIssue))
      .catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Failed adding an Issue'
        });
      });

  }, 1000);
};


const getById = (req, res) => {
  const id = req.params.id;

  Issue.findByIdAsync(id)
    .then(issue => {
      if (!issue) {
        return res.status(httpStatus.NOT_FOUND).json({
          message: 'No such Issue'
        });
      }
      res.json(issue);
    })
    .catch(err => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed getting an Issue'
      });
    });
};

/**
 * Delete issue.
 * @returns {Issue}
 */
const remove = (req, res) => {
  const id = req.params.id;

  Issue.findByIdAndRemoveAsync(id)
    .then(removedIssue => {
      if (!removedIssue) {
        return res.status(httpStatus.NOT_FOUND).json({
          message: 'No such Issue'
        });
      }
      res.json(removedIssue);
    })
    .catch(err => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed removing an Issue'
      });
    });
};

const update = (req, res) => {
  const id = req.params.id;
  const issue = new Issue(req.body);

  Issue.findByIdAndUpdateAsync(id, { $set: { title: issue.title, description: issue.description }}, { new: true})
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
        message: 'Failed adding an Issue'
      });
    });
};

export default { list, create, getById, remove, update };
