import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import ProjectFormNavigation from './prj_form_nav';
import HeaderC from '../header_container';

class ProjectBasics extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categories_hidden: true,
      countries_hidden: true,
      title: this.props.currentProject.title,
      subtitle: this.props.currentProject.subtitle,
      category: this.props.currentProject.category,
      country: this.props.currentProject.country,
      end_date: this.props.currentProject.end_date,
      pledge_goal: this.props.currentProject.pledge_goal,
      img_url: this.props.currentProject.imageUrl
    };
    this.categories = [
      "Art", "Comics", "Crafts", "Dance", "Design", "Fashion",
      "Film & Video", "Food", "Games", "Journalism", "Music", "Photography",
      "Publishing", "Technology", "Theater"
    ];
    this.countries = [
      'US', 'UK', 'Canada', 'Australia',' New Zealand', 'the Netherlands', 'Denmark',
      'Ireland', 'Norway', 'Sweden', 'Germany', 'France', 'Spain', 'Italy', 'Austria',
      'Belgium', 'Switzerland', 'Luxembourg', 'Hong Kong', 'Singapore', 'Mexico', 'Japan'
    ];
    this.menuDropCategory = this.menuDropCategory.bind(this);
    this.menuDropCountry = this.menuDropCountry.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.img_url !== nextProps.currentProject.imageUrl) {
      this.setState({img_url: nextProps.currentProject.imageUrl});
    }
  }

  saveChanges () {
    this.props.updateProject({
      id: this.props.currentProject.id,
      title: this.state.title,
      subtitle: this.state.subtitle,
      category: this.state.category,
      country: this.state.country,
      end_date: this.state.end_date,
      pledge_goal: parseInt(this.state.pledge_goal),
    });
  }

  discardChanges () {
    this.setState({
      title: this.props.currentProject.title,
      subtitle: this.props.currentProject.subtitle,
      category: this.props.currentProject.category,
      country: this.props.currentProject.country,
      end_date: this.props.currentProject.end_date,
      pledge_goal: this.props.currentProject.pledge_goal,
    });
  }

  menuDropCategory () {
    this.setState({categories_hidden: !this.state.categories_hidden});
  }

  menuDropCountry () {
    this.setState({countries_hidden: !this.state.countries_hidden});
  }

  edit (field) {
    return (e) => {
      if (field === 'pledge_goal') {
        this.setState({[field]: parseInt(e.currentTarget.value)});
      } else {
        this.setState({[field]: e.currentTarget.value});
      }
    };
  }

  handleFile (e) {
    const formData = new FormData();
    const image = e.currentTarget.files[0];
    formData.append('project[image]', image);

    this.props.updateProjectImage(this.props.currentProject.id, formData);
  }

  checkForCompleteness () {
    return (['title', 'subtitle', 'category', 'country', 'end_date', 'pledge_goal'].every((prop) => {
      return this.props.currentProject[prop];
    }) && ['title', 'subtitle', 'category', 'country', 'end_date', 'pledge_goal'].every((prop) => {
      return this.props.currentProject[prop] === this.state[prop];
    }));
  }

  changesMade () {
    const anyChanges = ['title', 'subtitle', 'category', 'country', 'end_date', 'pledge_goal'].every((prop) => {
      return this.props.currentProject[prop] === this.state[prop];
    });
    if (anyChanges) {
      return null;
    } else {
      return <button onClick={this.discardChanges.bind(this)}>Discard Changes</button>;
    }
  }

  finalButton () {
    if (this.checkForCompleteness()) {
      return <Link to='/setup/project/story'>Next: Story</Link>;
    } else {
      return <button onClick={this.saveChanges.bind(this)}>Save</button>;
    }
  }

  imageInput () {
    if (this.state.img_url) {
      return <img className='project-image-render' src={this.state.img_url}></img>;
    } else {
      return (
        <div id='no-image'>
          <div id='pic-icon-circle'>
            <i className="fa fa-file-image-o"></i>
          </div>
          Select image file
        </div>
      );
    }
  }

  render () {
    return (
      <div>
        <HeaderC/>
        <main className='basics-wrapper'>
        <header>
          <h1>Start with the basics</h1>
          <h2>Make it easy for people to learn about your project.</h2>
        </header>
        <form className='basics-form'>
          <div className='form-li'>
            <div className='li-text'>
              <h6>Project title</h6>
              <p>Write a clear, brief title that helps people quickly understand the gist of your project.</p>
            </div>
            <div className='li-inputs'>
              <label>Title</label>
              <input id='title' type='text' value={this.state.title} onChange={this.edit('title')}></input>
              <label>Subtitle</label>
              <input id='subtitle' type='text' value={this.state.subtitle} onChange={this.edit('subtitle')}></input>
            </div>
          </div>

          <div className='form-li'>
            <div className='li-text'>
              <h6>Project image</h6>
              <p>
                Add an image that clearly represents your project.<br></br><br></br>
                Choose one that looks good at different sizes. It will appear in different sizes in different places: on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.<br></br><br></br>
                You may want to avoid including banners, badges, and text because they may not be legible at smaller sizes.<br></br><br></br>
            </p>
            </div>
            <div className='li-inputs'>
              <label id='add-image-label'>
                {this.imageInput()}
                <input id='image-input' type='file' onChange={this.handleFile.bind(this)}></input>
              </label>
            </div>
          </div>

          <div className='form-li'>
            <div className='li-text'>
              <h6>Category</h6>
              <p>Choose the category that most closely aligns with your project. <br></br><br></br>Think of where backers may look to find it. Reach a more specific community by also choosing a subcategory. <br></br><br></br>You’ll be able to change the category and subcategory even after your project is live.</p>
            </div>
            <div className='li-inputs'>
              <button
                id='category-button-basics'
                onClick={this.menuDropCategory}
                className={`${this.state.categories_hidden ? '' : 'black-border'} ddm-button`}
              >
                <p
                  id='button-text'
                  className={`button-text black-text`}>
                  {this.state.category}
                </p>
                <i className="fa fa-caret-down" id="button-arrow"></i>
              </button>
              <ul className={this.state.categories_hidden ? 'hidden' : 'drop-down'} id="ddm-basics">
                {
                  this.categories.map((category, idx) => {
                    if (this.state.category === category) {
                      return <li
                        key={idx}
                        id={category}
                        className={'pre-selected'}
                        onClick={
                          () => {
                            this.setState({category: category});
                            this.menuDropCategory();
                          }
                        }
                        >
                        <p>{category}</p><i className="fa fa-check-circle" id="check"></i></li>;
                    } else {
                      return <li
                        key={idx}
                        id={category}
                        onClick={
                          () => {
                            this.setState({category: category});
                            this.menuDropCategory();
                          }
                        }
                        >
                        <p>{category}</p></li>;
                    }
                  })
                }
              </ul>
            </div>
          </div>

          <div className='form-li'>
            <div className='li-text'>
              <h6>Project Location</h6>
              <p>Enter the location that best describes where your project is based.</p>
            </div>
            <div className='li-inputs'>
              <button
                id='country-button-basics'
                onClick={this.menuDropCountry}
                className={`${this.state.countries_hidden ? '' : 'black-border'} ddm-button`}
              >
                <p
                  id='button-text'
                  className={`button-text black-text`}>
                  {this.state.country}
                </p>
                <i className="fa fa-caret-down" id="button-arrow"></i>
              </button>
              <ul className={this.state.countries_hidden ? 'hidden' : 'drop-down'} id="ddm-countires-basics">
                {
                  this.countries.map((country, idx) => {
                    if (this.state.country === country) {
                      return <li
                        key={idx}
                        id={country}
                        className={'pre-selected'}
                        onClick={
                          () => {
                            this.setState({country: country});
                            this.menuDropCountry();
                          }
                        }
                        >
                        <p>{country}</p><i className="fa fa-check-circle" id="check"></i></li>;
                    } else {
                      return <li
                        key={idx}
                        id={country}
                        onClick={
                          () => {
                            this.setState({country: country});
                            this.menuDropCountry();
                          }
                        }
                        >
                        <p>{country}</p></li>;
                    }
                  })
                }
              </ul>
            </div>
          </div>

          <div className='form-li'>
            <div className='li-text'>
              <h6>Project End Date</h6>
              <p>Set a time limit for your campaign. You won’t be able to change this after you launch.</p>
            </div>
            <div className='li-inputs'>
              <input id='end_date' type="date" value={this.state.end_date || ""} onChange={this.edit('end_date')}></input>
            </div>
          </div>

          <div className='form-li'>
            <div className='li-text'>
              <h6>Funding Goal</h6>
              <p>Set an achievable goal that covers what you need to complete your project. <br></br><br></br>Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.</p>
            </div>
            <div className='li-inputs'>
              <input
                id='pledge_goal'
                type="number"
                value={this.state.pledge_goal || ""}
                onChange={this.edit('pledge_goal')}>
              </input>
            </div>
          </div>
        </form>
        <footer>
          {this.changesMade()}
          {this.finalButton()}
        </footer>
      </main>
      </div>
    );
  }
}

export default ProjectBasics;
