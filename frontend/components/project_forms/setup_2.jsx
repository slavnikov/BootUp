import React from 'react';
import HeaderC from '../header_container';
import { Route, Link, Redirect } from 'react-router-dom';

class Setup2Class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      subtitle: this.props.tempPrjProps.subtitle || ""
    };
    this.submitSubtitle = this.submitSubtitle.bind(this);
  }

  submitSubtitle (e) {
    this.props.receiveCurrentProjectProps({subtitle: this.state.subtitle});
  }

  render () {
    return (
      <div>
        <HeaderC/>
        <div className='setup-wrapper'>
          <div className="pg-counter">
            <p >2 of 3</p>
          </div>
          <section className='setup-form'>
            <h2>Describe what you’ll be creating.</h2>
            <h4>And don’t worry, you can edit this later, too.</h4>
            <textarea
              id ="subtitle-text"
              maxLength="135"
              defaultValue={this.state.subtitle}
              placeholder='This will appear as the subtitle of your project.'
              onChange={(e) => this.setState({subtitle: e.currentTarget.value})}>
            </textarea>
            <div className='char-count'>
              <p id='char-counter'>{this.state.subtitle.length}</p><p>/135</p>
            </div>
            <section className='bottom-section' id='boottom-section-2'>
              <Link to='/setup/1' id='nav-back'><i className="fa fa-long-arrow-left"></i><p>Category</p></Link>
              <a
                id='next-step'
                href={this.state.subtitle.length > 0 ? '#/setup/3' : null}
                className={this.state.subtitle.length > 0 ? 'active' : 'deactivated'}
                onClick={this.submitSubtitle}>
                Next: Location
              </a>
            </section>
            <p>To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</p>
          </section>
        </div>
      </div>
    );
  }
}

export default Setup2Class;
