import React from 'react';
import Button from '../common/Button';

class CommentEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  isValidForm() {
    return this.state.text.length > 0;
  }

  saveForm(card, createComment) {
    if (!this.isValidForm()) {
      return;
    }

    createComment({
      cardId: card._id,
      text: this.state.text
    }).then(() => {
      this.setState({text: ''});
    });
  }

  render() {
    const {card, saving, createComment} = this.props;

    return (
      <div className='comment-form'>
        <textarea
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
          className='form-control comment-form-area'
          rows='3'
          placeholder='Add a comment...'
        />

        <Button
          text={saving ? 'Saving...' : 'Save'}
          disabled={saving}
          onClickHandler={(e) => {
            e.preventDefault();
            this.saveForm(card, createComment);
          }}
          className='btn btn-primary btn-sm'
          disabled={!this.isValidForm()}
         />
      </div>
    )
  }
}

export default CommentEditForm;
