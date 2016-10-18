import React, {PropTypes} from 'react';
import ReactDOM from "react-dom";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        filter: '',
        showBox: false
      }
  }

  componentDidUpdate() {
    if (this.state.showBox) {
      ReactDOM.findDOMNode(this.refs.searchBox).focus();
    }
  }

  searchClick(e) {
    e.preventDefault();

    this.setState({ showBox: !this.state.showBox });
    this.applyFilter('');
  }

  handleFilter(e) {
    this.applyFilter(e.target.value);
  }

  applyFilter(filter) {
    this.setState({ filter });
    const minLength = this.props.minLength || 3;

    const listFilter  = filter.length < minLength ? '' : filter;

    if (this.props.onFilterUpdate) {
      this.props.onFilterUpdate(listFilter);
    }
  }

  render() {
    const {containerClassName, buttonClassName, buttonText, inputClassName, inputPlaceholder} = this.props;

    return (
      <div className={containerClassName}>
        <button className={buttonClassName} onClick={this.searchClick.bind(this)}>
          {this.state.showBox
            ? <span className="glyphicon glyphicon-menu-left"></span>
          : <span><span className="glyphicon glyphicon-menu-right"></span>{buttonText}</span>
          }
        </button>

        {this.state.showBox
          ? <input
              ref='searchBox'
              onChange={this.handleFilter.bind(this)}
              value={this.state.filter}
              placeholder={inputPlaceholder}
              className={inputClassName} />
          : null
        }
      </div>
    );
  }
}

SearchBox.propTypes = {
  minLength: PropTypes.number.isRequired,
  containerClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  buttonText: PropTypes.string,
  inputClassName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  onFilterUpdate: PropTypes.func.isRequired
};

export default SearchBox;
