import React from 'react';
import * as filteredList from '../../customStore';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        filter: ''
      }
  }

  handleFilter(e) {
    e.preventDefault();

    this.setState({ filter: e.target.value });

    if (e.target.value.length > 2) {
      console.log(e.target.value);
      filteredList.filter(issue => issue.title.toLowerCase() === e.target.value.toLowerCase());
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleFilter.bind(this)}
          value={this.state.filter}
          placeholder='Search your stuff' />
      </div>
    );
  }
}

export default SearchBox;
