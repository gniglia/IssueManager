import React from 'react';
import Button from '../common/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as issueActions from '../../actions/issueActions';
import GoBackButton from '../common/GoBackButton';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

class IssueEditForm extends React.Component {
  constructor(props) {
    super(props);

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
    toastr.success('Issue saved successfully');
    browserHistory.push('/issues');
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  isValidForm() {
    return this.state.title.length > 0 && this.state.description.length > 0;
  }

  render () {
    const {issue, saving, issueActions} = this.props;
    let headerTitle = issue ? `Editing '${issue.title}'` : 'Adding a new issue';

    return (
      <div>
        <h3>{headerTitle}</h3>

        <form>
          <div className='form-group'>
            <label>Title</label>
            <input
              value={this.state.title}
              onChange={this.handleTitleChange.bind(this)}
              className='form-control'
              placeholder='Issue title'
            />
          </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea
              value={this.state.description}
              onChange={this.handleDescriptionChange.bind(this)}
              className='form-control'
              rows='3'
              placeholder='Issue description'
            />
          </div>

          <Button
            text={saving ? 'Saving...' : 'Save'}
            disabled={saving}
            onClickHandler={(e) => {
              e.preventDefault();

              if (!this.isValidForm()) {
                toastr.warning('Title and Description are required');
                return;
              }

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
           {' '}
           <GoBackButton text='Cancel' className='btn btn-primary btn-sm' />
        </form>
      </div>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(IssueEditForm);
