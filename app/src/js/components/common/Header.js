import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div class="page-header">
      <h1>This is the header of Issue Manager</h1>
      <nav>
        <IndexLink to='/'>Home</IndexLink>
        {' | '}
        <Link to='/issues'>Issues</Link>
      </nav>
    </div>
  );
};

export default Header;
