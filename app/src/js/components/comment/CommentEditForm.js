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
      <div>
        <div className='form-group'>
          <textarea
            value={this.state.text}
            onChange={this.handleTextChange.bind(this)}
            className='comment-form-area width-100'
            rows='3'
            placeholder='Add a comment...'
          />
        </div>

        <Button
          text={saving ? 'Saving...' : 'Add'}
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
