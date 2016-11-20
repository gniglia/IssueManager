import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import SearchBox from '../../common/SearchBox';
import * as filterActions from '../../../actions/filterActions';
import Avatar from '../../common/avatar/Avatar';
import './Header.scss';

const Header = ({updateFilter}) => {
  return (
    <div className='header-container'>
      <header className='header-main'>
        <div className='header-main--leftPanel'>
          <Link to={'/cards-edit'}>
            <span className='icon-new-card'></span>
          </Link>
        </div>
        <div className='header-main--centralPanel'>Card Manager</div>
        <div className='header-main--rightPanel'>
          <Avatar mode='1' />
        </div>
      </header>
      <nav className='header-nav'>
        <SearchBox
          minLength={3}
          inputClassName='header-nav--search'
          inputPlaceholder='Search'
          onFilterUpdate={updateFilter} />
      </nav>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: bindActionCreators(filterActions.updateFilter, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Header);
