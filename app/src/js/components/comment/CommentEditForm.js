import React from 'react';
import Button from '../common/Button';
import GoBackButton from '../common/GoBackButton';
import toastr from 'toastr';

class CommentEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  componentWillMount() {
    const {issue, commentActions} = this.props;
    if (issue) {
      this.setState({
        title: issue.title,
        description: issue.description
      });
    }
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  isValidForm() {
    return this.state.text.length > 0;
  }

  saved() {
    this.setState({text: ''});
    toastr.success('Comment saved successfully');
  }

  render() {
    const {issue, saving, createCommentAction} = this.props;

    return (
      <div>
        <form>
          <div className='form-group'>
            <label>Text</label>
            <textarea
              value={this.state.text}
              onChange={this.handleTextChange.bind(this)}
              className='form-control'
              rows='3'
              placeholder='Comment text'
            />
          </div>

          <Button
            text={saving ? 'Saving...' : 'Save'}
            disabled={saving}
            onClickHandler={(e) => {
              e.preventDefault();

              if (!this.isValidForm()) {
                toastr.warning('Text is required');
                return;
              }

              createCommentAction({
                issueId: issue._id,
                text: this.state.text
              }).then(() => {
                this.saved();
              });
            }}
            className='btn btn-primary btn-sm'
           />
           {' '}
           <GoBackButton text='Back' className='btn btn-primary btn-sm' />
        </form>
      </div>
    )
  }
}

export default CommentEditForm;
