import Issue from '../models/issue';

const list = (req, res) => {
  Issue.find((err, issues) => {
    if (err) {
      return res.status(500).json({
        message: 'Internal server error'
      });
    }

    return res.status(200).json(issues);
  });
};

const create = (req, res) => {
  const issue = new Issue(req.body);

  issue.save(err => {
    if (err) {
      return res.status(500).json({
        message: 'Failed adding an Issue'
      });
    }

    return res.status(201).json(issue);
  });
};

const getById = (req, res) => {
  const id = req.params.id;

  Issue.findOne({ _id: id }, (err, issue) => {
    if (err) {
      return res.status(500).json({
        message: 'Failed getting an Issue'
      });
    }
    if (!issue) {
      return res.status(404).json({
        message: 'No such Issue'
      });
    }

    return res.json(issue);
  });
};

const remove = (req, res) => {
  const id = req.params.id;

  Issue.findByIdAndRemove(id, (err, issue) => {
    if (err) {
      return res.status(500).json({
        message: 'Failed to removing an Issue'
      });
    }

    return res.json(issue);
  });
};

export default { list, create, getById, remove };
