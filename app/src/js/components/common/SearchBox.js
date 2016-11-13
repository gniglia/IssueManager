import React, {PropTypes} from 'react';
import ReactDOM from "react-dom";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
      this.state = { filter: ''}
  }

  handleFilter(e) {
    this.applyFilter(e.target.value);
  }

  applyFilter(filter) {
    this.setState({ filter });
    const {minLength} = this.props;

    const listFilter  = filter.length < minLength ? '' : filter;

    if (this.props.onFilterUpdate) {
      this.props.onFilterUpdate(listFilter);
    }
  }

  render() {
    const {inputClassName, inputPlaceholder} = this.props;

    return (
      <input
        onChange={this.handleFilter.bind(this)}
        value={this.state.filter}
        placeholder={inputPlaceholder}
        className={inputClassName} />
    );
  }
}

SearchBox.propTypes = {
  minLength: PropTypes.number.isRequired,
  inputClassName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  onFilterUpdate: PropTypes.func.isRequired
};

export default SearchBox;
