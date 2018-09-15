import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { merge } from 'lodash';
import HeaderC from '../header_container';

const Setup3 = (props) => {

  const countries = [
    'US', 'UK', 'Canada', 'Australia',' New Zealand', 'the Netherlands', 'Denmark',
    'Ireland', 'Norway', 'Sweden', 'Germany', 'France', 'Spain', 'Italy', 'Austria',
    'Belgium', 'Switzerland', 'Luxembourg', 'Hong Kong', 'Singapore', 'Mexico', 'Japan'
  ];

  const submitCountry = (e) => {
    props.receiveCurrentProjectProps({country: e.target.id});
    // document.getElementById('country-button').innerHTML = e.currentTarget.innerHTML;
    document.getElementById('button-text').innerHTML = e.currentTarget.id;
    document.getElementById('button-text').classList.add('black-text');
    document.getElementById('next-step').href = '#/setup/project/overview';
    const next_step = $('#next-step');
    next_step.addClass("active");
    styleSelected();
    menuDrop();
  };

  const styleSelected = () => {
    const lis = $("li");
    lis.removeClass('pre-selected');
    lis.each((idx, li) => {
      li.innerHTML=`<p>${li.id}</p>`;
    });
    const chosen = $(`#${props.tempPrjProps.country}`);
    chosen.addClass('pre-selected');
    chosen.html(`<p>${chosen.attr('id')}</p><i class="fa fa-check-circle" id="check"></i>`);
  };

  const nextStep = () => {
    if (props.tempPrjProps.country) {
      return "#/setup/project/overview";
    } else {
      return null;
    }
  };

  const createProject = () => {
    props.createProject(merge(props.tempPrjProps, {admin_id: props.currentUser.id}));
  };

  const menuDrop = () => {
    const ele = document.getElementById('ddm');
    ele.classList.toggle('hidden');
    ele.classList.toggle('drop-down');
    const button = document.getElementById('country-button');
    button.classList.toggle('black-border');
  };

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
          <button id='country-button' onClick={menuDrop}><p id='button-text' className="button-text">{props.tempPrjProps.country || "Select your country"}</p><i className="fa fa-caret-down" id="button-arrow"></i></button>
          <ul className='hidden' id="ddm">
            {
              countries.map((country, idx) => {
                return <li
                  key={idx}
                  id={country}
                  onClick={
                    submitCountry
                  }
                  >
                  <p>{country}</p></li>;
                  })
                }
              </ul>
              <section className='bottom-section'>
                <Link to='/setup/2' id='nav-back'><i className="fa fa-long-arrow-left"></i><p>Project idea</p></Link>
                <a id='next-step' href={nextStep()} onClick={createProject}>Continue</a>
              </section>
              <p>To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</p>
            </section>
          </div>
    </div>
  );
};

export default Setup3;
