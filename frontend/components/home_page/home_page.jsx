import React from 'react';
import HeaderC from '../header_container';
import LoadingSpinner from '../util/loading_spinner';
import HomeGallery from './home_gallery';

class HomePage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      category_id: null,
      loading: 0,
      user_count: this.props.site_data.user_count,
      active_projects: this.props.site_data.active_projects,
      live_projects: this.props.site_data.live_projects
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({loading: (this.state.loading-1)});

    if (this.state.category_id === null && nextProps.categories) {
      this.setState({category_id: Object.keys(nextProps.categories)[0]});
    }
    if (nextProps.site_data.user_count && !this.state.user_count) {
      this.setState(nextProps.site_data)
    }
  }
  componentWillMount () {
    this.setState({loading: 2});
    this.props.fetchCategoryIndex();
    this.props.fetchProjects();
  }

  componentDidMount () {
    this.setState({loading: (this.state.loading + 1)});
    this.props.fetchSiteData();
  }

  render () {

    if (this.state.loading > 0) {
      return <LoadingSpinner/>;
    }

    const currCatId = parseInt(this.state.category_id) || parseInt(Object.keys(this.props.categories)[0]);
    const projectsArr = Object.values(this.props.projects).filter((project) => {
      return project.category_id === currCatId;
    });
    const date = new Date();

    return (
      <div>
        <HeaderC/>
        <span id='home-subheader'>
          <div>
            <p>{date.toDateString()}</p>
            <h6>Bringing creative projects to life.</h6>
          </div>
          <div>
            <p>TOTAL USERS</p>
            <h6>{this.state.user_count}</h6>
          </div>
          <div>
            <p>ACTIVE PROJECTS</p>
            <h6>{this.state.active_projects}</h6>
          </div>
          <div>
            <p>LIVE PROJECTS</p>
            <h6>{this.state.live_projects}</h6>
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
