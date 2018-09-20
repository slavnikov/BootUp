import React from 'react';
import HeaderC from '../header_container';
import HomeGallery from './home_gallery';

class HomePage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      categoryId: null,
      loading: 0,
      user_count: this.props.site_data.user_count,
      active_projects: this.props.site_data.active_projects,
      backings: this.props.site_data.backings
    };
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.categoryId === null && nextProps.categories) {
      this.setState({categoryId: Object.keys(nextProps.categories)[0]});
    }
    if (nextProps.site_data.user_count && !this.state.user_count) {
      this.setState(nextProps.site_data);
    }
  }

  componentDidMount () {
    this.props.fetchCategoryIndex();
    this.props.fetchProjects();
    this.props.fetchSiteData();
  }

  render () {
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
            <p>BACKINGS</p>
            <h6>{this.state.backings}</h6>
          </div>
        </span>
        <ul id='home-nav'>
          {
            Object.keys(this.props.categories).map((category_id) => {
              return (
                <li
                  key={category_id}
                  id={category_id}
                  onClick={() => {this.setState({categoryId: category_id});}}
                  className={this.state.categoryId === category_id ? 'chosen-nav' : ''}>
                  {this.props.categories[category_id].name}
                </li>
              );
            })
          }
        </ul>
        <HomeGallery
          categories={this.props.categories || {}}
          currCatId={this.state.categoryId}
          projects={this.props.projects || {}}
          users={this.props.users || {}}
        />
      </div>
    );
  }
}

export default HomePage;
