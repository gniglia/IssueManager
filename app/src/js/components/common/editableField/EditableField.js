import React, { PropTypes } from 'react'
import ReactDOM from "react-dom";
import classNames from 'classnames';
import './EditableField.scss';

class EditableField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

  handleFieldLeave() {
    if (this.props.required && this.state.fieldValue.length === 0) {
      ReactDOM.findDOMNode(this.refs.field).focus();
      return;
    }

    this.setState({editable: false});

    if (this.props.onFieldChange) {
      this.props.onFieldChange({
        id: this.props.id,
        [this.props.fieldName]: this.state.fieldValue
      });
    }
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

  componentWillMount() {
    if (!this.props.fieldValue) {
      this.setState({fieldValue: ''});
    }
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
      this.handleFieldLeave();
    }
  }

  handleKeyUp(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;

    // Escape pressed
    if (keyCode == 27) {
      this.setState({
        fieldValue: this.props.fieldValue,
        editable: false
      });
    }
  }

  componentDidUpdate() {
    this.setFocus();
  }

  render() {
    if (this.state.editable) {
      if (this.props.fieldType === 'text') {
        return (
          <input
            className='editable-field-text'
            ref='field'
            value={this.state.fieldValue}
            onKeyPress={this.handleKeyPress.bind(this)}
            onKeyUp={this.handleKeyUp.bind(this)}
            onChange={this.handleFieldChange.bind(this)}
            onBlur={this.handleFieldLeave.bind(this)} />
        );
      }
      return (
        <textarea
          className='editable-field-area'
          ref='field'
          value={this.state.fieldValue}
          onKeyUp={this.handleKeyUp.bind(this)}
          onChange={this.handleFieldChange.bind(this)}
          onBlur={this.handleFieldLeave.bind(this)} />
      );
    }

    var labelClasses = classNames({
        'editable-field': true,
        'text-italic': !this.state.fieldValue
    });

    return (
      <div
        title='Click to edit'
        className={labelClasses}
        onClick={this.editField.bind(this)}>
        {this.getDefaultValue()}
        <span className="hover">
          ED
        </span>
      </div>
    );
  }
}

EditableField.defaultProps = {
  required: false
};

export default EditableField;
