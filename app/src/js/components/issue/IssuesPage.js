import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as issueActions from '../../actions/issueActions';
import * as filterActions from '../../actions/filterActions';
import IssueList from './IssueList';
import { Link } from 'react-router';
import Button from '../common/Button';
import { getFilteredIssues } from '../../selectors/issueSelector';

const IssuesPage = (props) => {
  return (
    <div>
      <h3>Managing Issues</h3>

      <Link to={'/issues-edit'}>
        <Button
          text='Add issue'
          className='btn btn-primary btn-sm'
        />
      </Link>
      <hr />
      <IssueList
        isFetching={props.isFetching}
        issues={props.issues}
        deleteIssueAction={props.issueActions.deleteIssue}
        updateFilterAction={props.filterActions.updateFilter}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.issues.saving,
    issues: getFilteredIssues(state),
    isFetching: state.issues.fetching
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    issueActions: bindActionCreators(issueActions, dispatch),
    filterActions: bindActionCreators(filterActions, dispatch)
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(IssuesPage);
