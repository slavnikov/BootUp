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
    this.props.fetchProjects();
  }

  render () {
    if (Object.keys(this.props.categories).length === 0 || Object.keys(this.props.projects) .length === 0) {
      return <LoadingSpinner/>;
    }

    const currCatId = parseInt(this.state.category_id) || parseInt(Object.keys(this.props.categories)[0]);
    const projectsArr = Object.values(this.props.projects).filter((project) => {
      return project.category_id === currCatId;
    });

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
          categories={this.props.categories}
          currCatId={currCatId}
          projectsArr={projectsArr}
          users={this.props.users}
        />
      </div>
    );
  }
}

export default HomePage;
