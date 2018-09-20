import React from 'react';
import { Link } from 'react-router-dom';

class SearchRender extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateTimeLeft (endDate) {
    const daysLeft = (Date.parse(endDate) - Date.now()) / 1000 / 60 / 60 / 24;

    if (daysLeft > 1) {
      return (
        <div>
          <h5>{Math.round(daysLeft)}</h5>
          <h6>&nbsp;days to go</h6>
        </div>
      );
    } else if (daysLeft > 0){
      return <h6>Ends Today!</h6>;
    } else {
      return <h6>Ended</h6>;
    }
  }

  render () {
    if (!this.props.searchFinished || !this.props.searching || !this.props.results.length) {
      return null;
    }

    return (
      <ul id='search-render'>
        {
          this.props.results.map((result, idx) => {
            return (
              <li key={idx}>
                <Link to={`/project/${result.id}`} onClick={this.props.toggleSearch}>
                  <div id='gallery-thumb'><img src={result.imageUrl}></img></div>
                  <div id='search-item-text'>
                    <div id='search-item-titles'>
                      <h1>{result.title}</h1>
                      <h2>{result.subtitle}</h2>
                    </div>
                    <h3>{`by ${this.props.admins[result.admin_id].name}`}</h3>
                    <div id='search-item-stats'>
                      <h4>{`${result.percentComplete}% funded`}</h4>
                      {this.calculateTimeLeft(result.end_date)}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default SearchRender;
