import React from 'react';
import Card from './Card';
import Spinner from '../common/spinner/Spinner';
import './CardList.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { socketConnect } from 'socket.io-react';

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.socket.on('server:cardAdded', (data) => {
      this.props.createCardSocket(data.card);
    });

    this.props.socket.on('server:cardUpdated', (data) => {
      this.props.updateCardSocket(data.card);
    });
  }

  getCards(cards, archiveCard, showModal, setActiveCard) {
    if (cards.length === 0) {
      return (
        <div>No data to show</div>
      );
    }

    return (
      <div className="row-fluid">
        {
          cards.map(card => {
            return (
              <Card
                key={card._id}
                card={card}
                archiveCard={archiveCard}
                showModal={showModal}
                setActiveCard={setActiveCard}
              />
            )
        })}
      </div>
    );
  }

  render() {
    const {cards, fetching, archiveCard, showModal, setActiveCard} = this.props;

    if (fetching) {
      return (
        <Spinner />
      );
    }

    return (
      <div style={{padding: '0 20px 20px 0', overflow: 'hidden'}}>
        <ReactCSSTransitionGroup
          transitionName='card-list-'
          transitionAppear={true} transitionAppearTimeout={0}
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}>
          {this.getCards(cards, archiveCard, showModal, setActiveCard)}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default socketConnect(CardList);
