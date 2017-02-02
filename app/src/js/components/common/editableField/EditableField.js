import React, { PropTypes } from 'react'
import ReactDOM from "react-dom";
import classNames from 'classnames';
import './EditableField.scss';
import { socketConnect } from 'socket.io-react';

class EditableField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldOriginalValue: props.fieldValue,
      fieldValue: props.fieldValue,
      editable: false
    };
  }

  handleFieldChange(e) {
    this.setState({fieldValue: e.target.value});

    if (!this.props.required) return;

    let el = e.target;
    if (el.value.length === 0) {
      el.classList.add('alerta');
    }
    else {
      if (el.classList.contains('alerta')) {
        el.classList.remove('alerta');
      }
    }
  }

  submitField(e) {
    let activeElement = document.activeElement;
    if (e && e.target === activeElement) {
      return;
    }

    if (this.props.required && this.state.fieldValue.length === 0) {
      ReactDOM.findDOMNode(this.refs.field).focus();
      return;
    }

    if (this.props.onFieldChange) {
      this.props.onFieldChange({
        id: this.props.id,
        [this.props.fieldName]: this.state.fieldValue
      }).then(updatedCard => {
        this.props.socket.emit('cardUpdated', { card: updatedCard.value.data } );
      });
    }

    this.setState({
      editable: false,
      fieldOriginalValue: this.state.fieldValue
    });
  }

  editField() {
    let selection = window.getSelection();

    if (selection.toString().length === 0) {
      this.setState({editable: true});
    }
  }

  getDefaultValue() {
    return this.state.fieldValue || `Click to add ${this.props.fieldName}...`;
  }

  setFocus() {
    if (this.state.editable) {
      ReactDOM.findDOMNode(this.refs.field).focus();
    }
  }

  handleKeyPress(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;

    // Enter pressed
    if (keyCode == 13) {
      this.submitField();
    }
  }

  handleKeyUp(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;

    // Escape pressed
    if (keyCode == 27) {
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.setState({
      fieldValue: this.state.fieldOriginalValue,
      editable: false
    });
  }

  componentWillMount() {
    if (!this.props.fieldValue) {
      this.setState({fieldValue: ''});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.editable) return;

    this.setState({
      fieldOriginalValue: nextProps.fieldValue,
      fieldValue: nextProps.fieldValue,
    });
  }

  componentDidUpdate() {
    this.setFocus();
  }

  render() {
    if (this.state.editable) {
      if (this.props.fieldType === 'text') {
        return (
          <div className='wrapper'>
            <input
              type='text'
              className='editable-field-text'
              ref='field'
              value={this.state.fieldValue}
              onKeyPress={this.handleKeyPress.bind(this)}
              onKeyUp={this.handleKeyUp.bind(this)}
              onChange={this.handleFieldChange.bind(this)}
              onBlur={this.submitField.bind(this)} />
            <div className="bottom-panel">
              <span title='Submit' className='bottom-panel-submit icon-checkmark' onMouseDown={this.submitField.bind(this)} />
              <span title='Cancel' className='bottom-panel-cancel icon-cross' onMouseDown={this.cancelEdit.bind(this)} />
            </div>
          </div>
        );
      }
      return (
        <div className='wrapper'>
          <textarea
            className='editable-field-area'
            ref='field'
            value={this.state.fieldValue}
            onKeyUp={this.handleKeyUp.bind(this)}
            onChange={this.handleFieldChange.bind(this)}
            onBlur={this.submitField.bind(this)} />
          <div className="bottom-panel">
            <span title='Submit' className='bottom-panel-submit icon-checkmark' onMouseDown={this.submitField.bind(this)} />
            <span title='Cancel' className='bottom-panel-cancel icon-cross' onMouseDown={this.cancelEdit.bind(this)} />
          </div>
        </div>
      );
    }

    var labelClasses = classNames({
        'editable-field': true,
        'format-text': true,
        'text-italic': !this.state.fieldValue
    });

    return (
      <div className='editable-field-container' title='Click to edit' onClick={this.editField.bind(this)}>
        <div
          className={labelClasses}>
          {this.getDefaultValue()}
        </div>
        <div className="right-panel icon-pencil">
        </div>
      </div>
    );
  }
}

EditableField.defaultProps = {
  required: false
};

export default socketConnect(EditableField);
