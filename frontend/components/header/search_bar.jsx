import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFetched: false
    };
    this.timeout = null;
    this.commenceSearch = this.commenceSearch.bind(this);
  }

  commenceSearch(e) {
    return null;
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
        <i className="fa fa-times" onClick={this.props.toggleSearch}></i>
      </span>
    );
  }
}

export default SearchBar;
