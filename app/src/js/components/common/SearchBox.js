import React from 'react';

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

    if (this.props.onFilterUpdate) {
      this.props.onFilterUpdate(filter);
    }

    this.props.updateFilterAction(e.target.value);
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
