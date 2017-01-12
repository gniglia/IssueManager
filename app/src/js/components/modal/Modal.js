import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideModal } from '../../actions/modalActions';
import CardModal from './card/CardModal';
import NewCardModal from './card/NewCardModal';
import './Modal.scss';

const MODAL_COMPONENTS = {
  'MODAL_TYPE_CARD': CardModal,
  'MODAL_TYPE_NEW_CARD': NewCardModal
}

class Modal extends React.Component {
  render() {
    document.body.classList.remove('no-scroll-y');

    const { modal } = this.props;
    if (!modal) {
      return <span />;
    }

		const { modalType, modalProps } = modal;
		if (!modalType) {
			return <span />;
		}

    document.body.classList.add('no-scroll-y');

    const SpecificModal = MODAL_COMPONENTS[modalType];
    return <SpecificModal hideModal={this.props.hideModal} modalProps={modalProps} />;
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: bindActionCreators(hideModal, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
