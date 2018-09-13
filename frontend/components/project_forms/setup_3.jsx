import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { merge } from 'lodash';

const Setup3 = (props) => {

  const countries = [
    'US', 'UK', 'Canada', 'Australia',' New Zealand', 'the Netherlands', 'Denmark',
    'Ireland', 'Norway', 'Sweden', 'Germany', 'France', 'Spain', 'Italy', 'Austria',
    'Belgium', 'Switzerland', 'Luxembourg', 'Hong Kong', 'Singapore', 'Mexico', 'Japan'
  ];

  const submitCountry = (e) => {
    props.receiveCurrentProjectProps({country: e.target.innerHTML});
    document.getElementById('country-button').innerHTML = e.currentTarget.innerHTML;
    document.getElementById('next-step').href = '#/setup/setup/overview';
  };

  const nextStep = () => {
    if (props.tempPrjProps.country) {
      return "#/setup/setup/overview";
    } else {
      return null;
    }
  };

  const createProject = () => {
    props.createProject(merge(props.tempPrjProps, {admin_id: props.currentUser.id}));
  };

  return (
    <section>
      <h2>Finally, let’s confirm your eligibility.</h2>
      <h4>Tell us where you’re based and confirm a few other details before we proceed.</h4>
      <button id='country-button'>{props.tempPrjProps.country || "Select your country"}</button>
      <ul>
        {
          countries.map((country, idx) => {
            return <li
              key={idx}
              id={country}
              onClick={
                submitCountry
              }
              >
              {country}</li>;
          })
        }
      </ul>
      <section>
        <a id='next-step' href={nextStep()} onClick={createProject}>Continue</a>
      </section>
    </section>
  );
};

export default Setup3;
