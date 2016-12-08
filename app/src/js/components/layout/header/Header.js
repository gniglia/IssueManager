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
    <div className='header-container container-fluid'>
      <header className='header-main row'>
        <div className='header-main--left col-xs-2 col-sm-1 col-md-1'>
          <Link to={'/cards-edit'}>
            <span className='icon-new-card'></span>
          </Link>
        </div>
        <div className='header-main--central hidden-xs col-sm-6 col-sm-offset-1 col-md-7 col-md-offset-1'>Inbox</div>
        <div className='header-main--right col-xs-10 col-sm-4 col-md-3'>
          <div className='header-main-right-avatar'>
            <Avatar mode='1' />
          </div>
        </div>
      </header>
      <nav className='header-nav'>
        <div className='header-nav--right flex-align-right'>
          <SearchBox
            minLength={3}
            inputClassName='header-nav--search'
            inputPlaceholder='Search'
            onFilterUpdate={updateFilter} />
        </div>
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
