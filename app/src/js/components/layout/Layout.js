import React from "react";
import Header from './header/Header';
import Modal from '../modal/Modal';

const Layout = (props) => {
  return (
    <div>
      <Modal />

      <Header />
      <section className='layout-main-section'>
        {props.children}
      </section>
    </div>
  );
};

export default Layout;
