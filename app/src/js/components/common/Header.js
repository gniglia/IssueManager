import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to='/' activeClassName='active'>Home</IndexLink>
      {' | '}
      <Link to='/issues' activeClassName='active'>Issues</Link>
    </nav>
  );
};

export default Header;
