import httpStatus from 'http-status';
import Issue from '../models/issue';

const list = (req, res) => {

  Issue.findAsync()

  // Issue.find((err, issues) => {
  //   if (err) {
  //     return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
  //       message: 'Internal server error'
  //     });
  //   }
  //
  //   return res.status(httpStatus.OK).json(issues);
  // });
};

const create = (req, res) => {
  const issue = new Issue(req.body);

  issue.save(err => {
    if (err) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed adding an Issue'
      });
    }

    return res.status(httpStatus.CREATED).json(issue);
  });
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

const remove = (req, res) => {
  const id = req.params.id;

  Issue.findByIdAndRemove(id, (err, issue) => {
    if (err) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed removing an Issue'
      });
    }

    return res.json(issue);
  });
};

export default { list, create, getById, remove };
