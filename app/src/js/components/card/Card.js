import React from 'react';
import { Link } from 'react-router';
import Button from '../common/Button';
import toastr from 'toastr';

const CardItem = ({card, deleteCard}) => {
  return (
    <div key={card._id} className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <div className="caption">
          <h3><Link to={`/cards/${card._id}`}>{card.title}</Link></h3>
          <p>{card.description} ({card.comments.length})</p>
          <p>
            <Button
              text='remove'
              onClickHandler={() => {
                deleteCard(card._id)
                  .then(() => toastr.success('Card removed successfully'))
              }}
              className='btn btn-danger btn-xs'
            />
            {' '}
            <Link to={`/cards-edit/${card._id}`}>
              <Button
                text='edit'
                className='btn btn-success btn-xs'
              />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
