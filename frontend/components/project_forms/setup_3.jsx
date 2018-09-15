import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { merge } from 'lodash';
import HeaderC from '../header_container';

class Setup3Class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: true,
      chosen: false
    };
    this.menuDrop = this.menuDrop.bind(this);
    this.submitCountry = this.submitCountry.bind(this);
    this.createProject = this.createProject.bind(this);
    this.countries = [
      'US', 'UK', 'Canada', 'Australia',' New Zealand', 'the Netherlands', 'Denmark',
      'Ireland', 'Norway', 'Sweden', 'Germany', 'France', 'Spain', 'Italy', 'Austria',
      'Belgium', 'Switzerland', 'Luxembourg', 'Hong Kong', 'Singapore', 'Mexico', 'Japan'
    ];
  }

  submitCountry (e) {
    this.props.receiveCurrentProjectProps({country: e.target.id});
    this.setState({chosen: true});
    this.menuDrop();
  }

  menuDrop () {
    this.setState({hidden: !this.state.hidden});
  }

  createProject () {
    this.props.createProject(merge(this.props.tempPrjProps, {admin_id: this.props.currentUser.id}));
  }

  render () {
    return (
      <div>
        <HeaderC/>
        <div className='setup-wrapper'>
          <div className="pg-counter">
            <p >3 of 3</p>
          </div>
          <section className='setup-form'>
            <h2>Finally, let’s confirm your eligibility.</h2>
            <h4>Tell us where you’re based and confirm a few other details before we proceed.</h4>
            <button
              id='country-button'
              onClick={this.menuDrop}
              className={`${this.state.hidden ? '' : 'black-border'} ddm-button`}
            >
              <p
                id='button-text'
                className={`button-text ${this.props.tempPrjProps.country ? 'black-text' : ''}`}>
                {this.props.tempPrjProps.country || "Select your country"}
              </p>
              <i className="fa fa-caret-down" id="button-arrow"></i>
            </button>
            <ul className={this.state.hidden ? 'hidden' : 'drop-down'} id="ddm">
              {
                this.countries.map((country, idx) => {
                  if (this.props.tempPrjProps.country === country) {
                    return <li
                      key={idx}
                      id={country}
                      className={'pre-selected'}
                      onClick={
                        this.submitCountry
                      }
                      >
                      <p>{country}</p><i className="fa fa-check-circle" id="check"></i></li>;
                  } else {
                    return <li
                      key={idx}
                      id={country}
                      onClick={
                        this.submitCountry
                      }
                      >
                      <p>{country}</p></li>;
                  }
                })
              }
            </ul>
            <section className='bottom-section'>
              <Link to='/setup/2' id='nav-back'><i className="fa fa-long-arrow-left"></i><p>Project idea</p></Link>
              <a
                id='next-step'
                href={this.props.tempPrjProps.country ? '#/setup/project/overview' : null}
                className={this.props.tempPrjProps.country ? 'active' : 'deactivated'}
                onClick={this.createProject}
              >Continue
              </a>
            </section>
            <p>To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</p>
          </section>
        </div>
      </div>
    );
  }
}

export default Setup3Class;
