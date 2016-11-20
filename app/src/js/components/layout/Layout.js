import React from "react";
import Header from './header/Header';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <section className='layout-main-section'>
        {props.children}
      </section>
    </div>
  );
};

export default Layout;
