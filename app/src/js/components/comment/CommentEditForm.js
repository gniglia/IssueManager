import React from 'react';
import Button from '../common/Button';
import GoBackButton from '../common/GoBackButton';

class CommentEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  componentWillMount() {
    const {card} = this.props;
    if (card) {
      this.setState({
        title: card.title,
        description: card.description
      });
    }
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
              this.saveForm(card, createComment);
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
