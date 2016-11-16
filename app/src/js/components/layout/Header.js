import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import SearchBox from '../common/SearchBox';
import * as filterActions from '../../actions/filterActions';
import Avatar from '../common/avatar/Avatar';

const Header = ({updateFilter}) => {
  return (
    <div className="page-header">
      <header>
        <div className='left'>
          <Link to={'/cards-edit'}>
            New
          </Link>
        </div>
        <div className='center'>Card Manager</div>
        <div className='right'>
          <Avatar mode='1' />
        </div>
      </header>
      <nav>
        <SearchBox
          minLength={3}
          inputClassName=''
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
