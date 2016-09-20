import Issue from '../models/issue';

const list = (req, res) => {
  Issue.find((err, issues) => {
    if (err) {
      res.status(500);
      res.send('Internal Server Error');
    }
    else {
      res.status(200);
      res.send(issues);
    }
  });
};

const create = (req, res) => {
  const issue = new Issue(req.body);

  issue.save(err => {
    if (err) {
      res.status(500);
      res.send('Failed adding an Issue');
    }
    else {
      res.status(201);
      res.send(issue);
    }
  });
};

export default { list, create };
// list: function(req, res) {
//         carModel.find(function(err, cars){
//             if(err) {
//                 return res.status(500).json({
//                     message: 'Error getting car.'
//                 });
//             }
//             return res.json(cars);
//         });
//     },
