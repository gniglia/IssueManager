import httpStatus from 'http-status';
import Card from '../models/card';


const list = (req, res) => {
  Card.findAsync({ 'archived': false }, null, { sort: { '_id': 1 }})
    .then(cards => res.status(httpStatus.OK).json(cards))
    .catch(err => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Internal server error'
      });
    });
};

const create = (req, res) => {
  const card = new Card(req.body);

  setTimeout(() => {

    card.saveAsync()
      .then(savedCard => res.status(httpStatus.CREATED).json(savedCard))
      .catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Failed adding an Card'
        });
      });

  }, 1000);
};


const getById = (req, res) => {
  const id = req.params.id;

  Card.findByIdAsync(id)
    .then(card => {
      if (!card) {
        return res.status(httpStatus.NOT_FOUND).json({
          message: 'No such Card'
        });
      }
      res.json(card);
    })
    .catch(err => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed getting an Card'
      });
    });
};

/**
 * Delete card.
 * @returns {Card}
 */
const remove = (req, res) => {
  const id = req.params.id;

  Card.findByIdAndRemoveAsync(id)
    .then(removedCard => {
      if (!removedCard) {
        return res.status(httpStatus.NOT_FOUND).json({
          message: 'No such Card'
        });
      }
      res.json(removedCard);
    })
    .catch(err => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed removing an Card'
      });
    });
};

const update = (req, res) => {
  const id = req.params.id;

  Card.findByIdAndUpdateAsync(id, { $set: req.body }, { new: true})
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
        message: err
      });
    });
};

export default { list, create, getById, remove, update };
