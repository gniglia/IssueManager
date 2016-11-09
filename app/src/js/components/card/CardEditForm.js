import React from 'react';
import Button from '../common/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../../actions/cardActions';
import GoBackButton from '../common/GoBackButton';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

class CardEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };
  }

  setCardState(card) {
    if (card) {
      this.setState({
        title: card.title,
        description: card.description
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {card} = nextProps;
    this.setCardState(card);
  }

  componentWillMount() {
    const {card} = this.props;
    this.setCardState(card);
  }

  redirect() {
    toastr.success('Card saved successfully');
    browserHistory.push('/cards');
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

  saveForm(card, cardActions) {
    if (!this.isValidForm()) {
      toastr.warning('Title and Description are required');
      return;
    }

    if (card) {
      cardActions.updateCard({
        id: card._id,
        title: this.state.title,
        description: this.state.description
      }).then(() => this.redirect());
    }
    else {
      cardActions.createCard({
        title: this.state.title,
        description: this.state.description
      }).then(() => this.redirect());
    }
  }

  render () {
    const {card, saving, cardActions} = this.props;
    let headerTitle = card ? `Editing '${card.title}'` : 'Adding a new card';

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
              placeholder='Card title'
            />
          </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea
              value={this.state.description}
              onChange={this.handleDescriptionChange.bind(this)}
              className='form-control'
              rows='3'
              placeholder='Card description'
            />
          </div>

          <Button
            text={saving ? 'Saving...' : 'Save'}
            disabled={saving}
            onClickHandler={(e) => {
              e.preventDefault();
              this.saveForm(card, cardActions);
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
  const cardId = ownProps.params.id;
  const card = cardId && (state.cards.cards ? state.cards.cards.find(card => card._id === cardId) : null);

  return {
    saving: state.cards.saving,
    card
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cardActions: bindActionCreators(cardActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardEditForm);
