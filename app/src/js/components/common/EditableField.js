import React, { PropTypes } from 'react'
import ReactDOM from "react-dom";
import classNames from 'classnames';

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
  }

  handleFieldLeave() {
    this.setState({editable: false});

    if (this.props.onFieldChange) {
      // this.props.onFieldChange({
      //   id: this.props.id,
      //   title: this.state.fieldValue
      // });
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

  componentDidUpdate() {
    if (this.state.editable) {
      ReactDOM.findDOMNode(this.refs.field).focus();
    }
  }

  render() {
    if (this.state.editable) {
      if (this.props.fieldType === 'text') {
        return (
          <input
            className='editable-field-text'
            ref='field'
            value={this.state.fieldValue}
            onChange={this.handleFieldChange.bind(this)}
            onBlur={this.handleFieldLeave.bind(this)} />
        );
      }
      return (
        <textarea
          className='editable-field-area'
          ref='field'
          value={this.state.fieldValue}
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
        className={labelClasses}
        onClick={this.editField.bind(this)}>
        {this.getDefaultValue()}
      </div>
    );
  }
}

export default EditableField;
