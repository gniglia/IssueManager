import React from "react";
import Header from './header/Header';
import Modal from '../modal/Modal';

const Layout = ({children}) => {
  return (
    <div>
      <Modal />

      <Header />
      <section className='layout-main-section'>
        {children}
      </section>
    </div>
  );
}

export default Layout;
