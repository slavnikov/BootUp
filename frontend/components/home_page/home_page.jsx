import React from 'react';
import HeaderC from '../header_container';
import LoadingSpinner from '../util/loading_spinner';
import HomeGallery from './home_gallery';

class HomePage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      category_id: null
    };
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.category_id === null && nextProps.categories) {
      this.setState({category_id: Object.keys(nextProps.categories)[0]});
    }
  }

  componentDidMount () {
    this.props.fetchCategoryIndex();
  }

  render () {
    if (Object.keys(this.props.categories).length === 0) {
      return <LoadingSpinner/>;
    }

    return (
      <div>
        <HeaderC/>
        <span id='home-subheader'>
          <div>
            <p>September 17, 2018</p>
            <h6>Bringing creative projects to life.</h6>
          </div>
          <div>
            <p>TOTAL USERS</p>
            <h6>31</h6>
          </div>
          <div>
            <p>ACTIVE PROJECTS</p>
            <h6> 6</h6>
          </div>
          <div>
            <p>LIVE PROJECTS</p>
            <h6>2</h6>
          </div>
        </span>
        <ul id='home-nav'>
          {
            Object.keys(this.props.categories).map((category_id) => {
              return (
                <li
                  key={category_id}
                  id={category_id}
                  onClick={() => {this.setState({category_id: category_id});}}
                  className={this.state.category_id === category_id ? 'chosen-nav' : ''}>
                  {this.props.categories[category_id].name}
                </li>
              );
            })
          }
        </ul>
        <HomeGallery
          category_id={this.state.category_id}
          categories={this.props.categories}
        />
      </div>
    );
  }
}

export default HomePage;
