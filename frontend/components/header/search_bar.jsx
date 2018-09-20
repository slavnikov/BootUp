import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFetched: false
    };
  }

  render () {
    return (
      <span id='search-bar' className={this.props.searching ? 'infront' : 'behind'}>
        <form>
          <input
            type='text'
            placeholder='Search form projects by title and subtitle'
            onChange={(e) => {
              this.props.search(e.currentTarget.value, this.state.dataFetched);
              this.setState({dataFetched: true});
            }}>
          </input>
        </form>
        <i class="fa fa-times" onClick={this.props.toggleSearch}></i>
      </span>
    );
  }
}

export default SearchBar;
