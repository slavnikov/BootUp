import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  delayedSearch(e) {
    let event = e;
    Object.freeze(event);
    return function () {
      this.props.search(event.currentTarget.value);
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
              clearTimeout(this.timeout);
              this.timeout = setTimeout(this.delayedSearch(e).bind(this), 7e2);
            }}>
          </input>
        </form>
        <i className="fa fa-times" onClick={this.props.toggleSearch}></i>
      </span>
    );
  }
}

export default SearchBar;
