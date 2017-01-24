import React from "react";
import Header from './header/Header';
import Modal from '../modal/Modal';
import io from 'socket.io-client';

let socket = io();

class Layout extends React.Component {

  componentDidMount() {
    socket.on('serverSendNewCard', data => {
      alert(data);
    });
  }

  emitCard() {
    socket.emit('newCard', { card: 'blabla card'} );
  }

  render() {
    return (
      <div>
        <Modal />

        <Header />
        <section className='layout-main-section'>
          {this.props.children}
        </section>

        <div>
          <button onClick={this.emitCard.bind(this)}>click to emit</button>
        </div>
      </div>
    );
  }
};

export default Layout;
