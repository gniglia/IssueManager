import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div className="page-header">
      <h1>This is the header of Card Manager</h1>
      <nav>
        <IndexLink to='/'>Home</IndexLink>
        {' | '}
        <Link to='/cards'>Cards</Link>
      </nav>
    </div>
  );
};

export default Header;
