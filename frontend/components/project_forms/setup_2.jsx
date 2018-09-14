import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import HeaderC from '../header_container';

const Setup2 = (props) => {
  const nextStep = () => {
    if (props.tempPrjProps.subtitle) {
      return "#/setup/3";
    } else {
      return null;
    }
  };

  const submitSubtitle = () => {
    props.receiveCurrentProjectProps({
      subtitle: document.getElementById("subtitle-text").value
    });
  };

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
            defaultValue={props.tempPrjProps.subtitle}
            placeholder='This will appear as the subtitle of your project.'
            onChange={
              (e) => {
                let chars = document.getElementById('char-counter');
                chars.innerHTML = e.currentTarget.value.length;
                if (e.currentTarget.value !== "This will appear as the subtitle of your project.") {
                  document.getElementById('next-step').href = '#/setup/3';
                  $('#next-step').addClass('active');
                } else {
                  $('#next-step').addClass('deactivated');
                  $('#next-step').removeClass('active');
                }
              }
            }>
          </textarea>
          <div className='char-count'>
            <p id='char-counter'>0</p><p>/135</p>
          </div>
          <section className='bottom-section' id='boottom-section-2'>
            <Link to='/setup/1' id='nav-back'><i className="fa fa-long-arrow-left"></i><p>Category</p></Link>
            <a
              id='next-step'
              href={nextStep()}
              onClick={submitSubtitle}>
              Next: Location
            </a>
          </section>
          <p>To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</p>
        </section>
      </div>
    </div>
  );
};

export default Setup2;
