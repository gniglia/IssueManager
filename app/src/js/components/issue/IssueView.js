import React from 'react';
import { connect } from 'react-redux';
import CommentList from '../comment/CommentList';
import { bindActionCreators } from 'redux';
import * as commentActions from '../../actions/commentActions';
import CommentEdit from '../comment/CommentEdit';

const IssueView = ({issue, saving, commentActions}) => {
  return (
    <div>
      <h1>{issue.title}</h1>
      <CommentList
        issue={issue}
        onDeleteComment={commentActions.deleteComment}
      />
      <hr />
      <CommentEdit
        issue={issue}
        saving={saving}
        onCreateComment={commentActions.createComment}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const issueId = ownProps.params.id;

  return {
    saving: state.issues.saving,
    issue: state.issues.issues.find(issue => issue._id === issueId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    commentActions: bindActionCreators(commentActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueView);
