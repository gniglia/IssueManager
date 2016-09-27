import React from 'react';
import { connect } from 'react-redux';
import CommentList from '../comment/CommentList';
import { bindActionCreators } from 'redux';
import * as commentActions from '../../actions/commentActions';

const IssueView = ({selectedIssue, commentActions}) => {
  return (
    <div>
      <h1>{selectedIssue.title}</h1>
      <CommentList
        selectedIssue={selectedIssue}
        onCommentDelete={commentActions.deleteComment}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const issueId = ownProps.params.id;

  return {
    selectedIssue: state.issues.issues.find(issue => issue._id === issueId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    commentActions: bindActionCreators(commentActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueView);
