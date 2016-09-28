import React, {PropTypes} from 'react';
import Button from '../common/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as issueActions from '../../actions/issueActions';

class IssueEdit extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: '',
      description: ''
    };
  }

  componentWillMount() {
    const {issue} = this.props;
    if (issue) {
      this.setState({
        title: issue.title,
        description: issue.description
      });
    }
  }

  redirect() {
    this.context.router.push('/issues');
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  render () {
    const {issue, saving, issueActions} = this.props;
    let headerTitle = issue ? `Editing '${issue.title}'` : 'Adding a new issue';

    return (
      <div>
        <h1>{headerTitle}</h1>

        <form>
          <div className='form-group'>
            <label>Title</label>
            <input value={this.state.title} onChange={this.handleTitleChange.bind(this)} className='form-control' placeholder='Issue title' />
          </div>
          <div className='form-group'>
            <label>Description</label>
            <input value={this.state.description} onChange={this.handleDescriptionChange.bind(this)} className='form-control' placeholder='Issue description' />
          </div>

          <Button
            text={saving ? 'Saving...' : 'Save'}
            disabled={saving}
            onClickHandler={(e) => {
              e.preventDefault();

              if (issue) {
                issueActions.updateIssue({
                  id: issue._id,
                  title: this.state.title,
                  description: this.state.description
                }).then(() => this.redirect());
              }
              else {
                issueActions.createIssue({
                  title: this.state.title,
                  description: this.state.description
                }).then(() => this.redirect());
              }
            }}
            className='btn btn-primary btn-sm'
           />
        </form>
      </div>
    )
  }
}

IssueEdit.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const issueId = ownProps.params.id;
  const issue = issueId && state.issues.issues.find(issue => issue._id === issueId);

  return {
    saving: state.issues.saving,
    issue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    issueActions: bindActionCreators(issueActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueEdit);
