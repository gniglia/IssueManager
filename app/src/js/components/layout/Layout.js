import React from "react";
import Header from './Header';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <section>
        {props.children}
      </section>
    </div>
  );
};

export default Layout;
