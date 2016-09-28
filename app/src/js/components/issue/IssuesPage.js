import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as issueActions from '../../actions/issueActions';
import IssueList from './IssueList';
import { Link } from 'react-router';
import Button from '../common/Button';

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
        issues={props.issues}
        deleteIssueAction={props.issueActions.deleteIssue}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.issues.saving,
    issues: state.issues.issues
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    issueActions: bindActionCreators(issueActions, dispatch),
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(IssuesPage);
