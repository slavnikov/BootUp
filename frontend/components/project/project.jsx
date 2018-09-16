import React from 'react';
import HeaderC from '../header_container';
import LoadingSpinner from '../util/loading_spinner';

class ProjectPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchProject(this.props.match.params.project_id);
  }

  render () {
    if (!this.props.project) { //loading screen
      return (
        <div>
          <LoadingSpinner/>
        </div>
      );
    }//loaing screen

    return (
      <div>
        <HeaderC/>
        <main className='project-main'>
          <section>
            <span id='admin-info'>
              <a>
                <div id='admin-pic'>
                </div>
              </a>
              <span>
                By&nbsp;<a>{this.props.admin.name}</a>
              </span>
            </span>
            <span id='project-titles'>
              <h1>{this.props.project.title || "your project title will go here..."}</h1>
              <h3>{this.props.project.subtitle}</h3>
            </span>
          </section>
          <section>
            <div id='main-left'>
              <div id='project-picture'>
                pciture will go here
              </div>
              <div id='misc-info'>
                <i class="fa fa-map-marker"></i>
                <a id='prj-location'>{this.props.project.country}</a>
              </div>
            </div>
            <div id='main-right'>
              <div id='money-bar'>
              </div>
              <div id='green-money-bar'>
              </div>
              <h5 id='money-green'>$5,048</h5>
              <h6>pledged of $40,000</h6>
              <h5>155</h5>
              <h6>backers</h6>
              <h5>6</h5>
              <h6>days to go</h6>
            </div>
          </section>
        </main>
        <ul id='prj-nav'>
          <li>Campaign</li>
        </ul>
        <section id='project-bottom'>
          <div id='prj-story'>
            <h1>About</h1>
            <p>Many lemonade drinks are watered down; contain too much sugar and preservatives or very little if any authentic lemon juice. It was during a winter storm coupled with a craving for fresh squeezed lemonade (wishing Spring would soon arrive) that inspired a quest to develop a stellar lemonade drink.Many lemonade drinks are watered down; contain too much sugar and preservatives or very little if any authentic lemon juice. It was during a winter storm coupled with a craving for fresh squeezed lemonade (wishing Spring would soon arrive) that inspired a quest to develop a stellar lemonade drink.Many lemonade drinks are watered down; contain too much sugar and preservatives or very little if any authentic lemon juice. It was during a winter storm coupled with a craving for fresh squeezed lemonade (wishing Spring would soon arrive) that inspired a quest to develop a stellar lemonade drink.Many lemonade drinks are watered down; contain too much sugar and preservatives or very little if any authentic lemon juice. It was during a winter storm coupled with a craving for fresh squeezed lemonade (wishing Spring would soon arrive) that inspired a quest to develop a stellar lemonade drink.Many lemonade drinks are watered down; contain too much sugar and preservatives or very little if any authentic lemon juice. It was during a winter storm coupled with a craving for fresh squeezed lemonade (wishing Spring would soon arrive) that inspired a quest to develop a stellar lemonade drink.Many lemonade drinks are watered down; contain too much sugar and preservatives or very little if any authentic lemon juice. It was during a winter storm coupled with a craving for fresh squeezed lemonade (wishing Spring would soon arrive) that inspired a quest to develop a stellar lemonade drink.</p>
          </div>
          <div id='prj-rewards'>
            <h1>Support</h1>
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectPage;
