import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as issueActions from '../../actions/issueActions';
import IssueList from './IssueList';

const IssuesPage = (props) => {
  return (
    <div>
      <h1>This is the Issues Page!</h1>
      <IssueList
        issues={props.issues}
        onDeleteIssue={props.issueActions.deleteIssue}
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
