import React from 'react';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        filter: '',
        showBox: false
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

    if (this.props.onFilterUpdate) {
      this.props.onFilterUpdate(filter);
    }
  }

  render() {
    return (
      <div>
        <button className='btn btn-default' onClick={this.searchClick.bind(this)}>
          {this.state.showBox
            ? <span className="glyphicon glyphicon-menu-left"></span>
            : <span><span className="glyphicon glyphicon-menu-right"></span>Search</span>
          }
        </button>

        {this.state.showBox
          ? <input
              onChange={this.handleFilter.bind(this)}
              value={this.state.filter}
              placeholder={this.props.placeholder}
              className={this.props.className} />
          : null
        }
      </div>
    );
  }
}

export default SearchBox;
