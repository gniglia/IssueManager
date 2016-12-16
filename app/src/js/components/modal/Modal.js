import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideModal } from '../../actions/modalActions';
import CardModal from './CardModal';
import './Modal.scss';

const MODAL_COMPONENTS = {
  'MODAL_TYPE_EDIT_CARD': CardModal
}

class Modal extends React.Component {
  componentDidMount() {
  	document.addEventListener('keyup', (evt) => {
  		if (evt.keyCode === 27) {
        this.props.hideModal();
  		}
  	});
  }

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
    return <SpecificModal hideModal={this.props.hideModal} {...modalProps} />;
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
