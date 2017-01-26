import React from 'react';
import Button from '../common/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../../actions/cardActions';
import Spinner from '../common/spinner/Spinner';
import { socketConnect } from 'socket.io-react';

class CardEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  isValidForm() {
    return this.state.title.length > 0;
  }

  saveForm() {
    this.props.createCard({
      title: this.state.title,
      description: this.state.description
    }).then((savedCard) => {
      this.props.socket.emit('cardAdded', { card: savedCard.value.data } );
      this.props.hideModal();
    });
  }

  render () {
    const {saving} = this.props;

    return (
      <div>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            value={this.state.title}
            onChange={this.handleTitleChange.bind(this)}
            className='width-100'
            placeholder='Card title'
          />
        </div>
        <div className='form-group'>
          <label>Description</label>
          <textarea
            value={this.state.description}
            onChange={this.handleDescriptionChange.bind(this)}
            className='width-100'
            rows='3'
            placeholder='Card description'
          />
        </div>

        <Button
          text={saving ? 'Saving...' : 'Save'}
          disabled={saving || !this.isValidForm()}
          onClickHandler={(e) => {
            e.preventDefault();
            this.saveForm();
          }}
          className='btn btn-primary btn-sm' />
        {' '}
        <Button
          text='Cancel'
          onClickHandler={(e) => {
            e.preventDefault();
            this.props.hideModal();
          }}
          className='btn btn-primary btn-sm' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    saving: state.cards.saving
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCard: bindActionCreators(cardActions.createCard, dispatch)
  };
};

export default socketConnect(connect(mapStateToProps, mapDispatchToProps)(CardEditForm));
