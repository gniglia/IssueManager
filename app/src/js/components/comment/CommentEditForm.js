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
            this.saveForm(card, createComment);
          }}
          className='btn btn-primary btn-sm'
         />
      </div>
    )
  }
}

export default CommentEditForm;
