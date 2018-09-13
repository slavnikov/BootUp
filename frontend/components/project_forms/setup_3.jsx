import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

const Setup3 = (props) => {

  const countries = [
    'US', 'UK', 'Canada', 'Australia',' New Zealand', 'the Netherlands', 'Denmark',
    'Ireland', 'Norway', 'Sweden', 'Germany', 'France', 'Spain', 'Italy', 'Austria',
    'Belgium', 'Switzerland', 'Luxembourg', 'Hong Kong', 'Singapore', 'Mexico', 'Japan'
  ];

  const submitCountry = (e) => {
    props.receiveCurrentProjectProps({country: e.target.innerHTML});
    document.getElementById('country-button').innerHTML = e.currentTarget.innerHTML;
    document.getElementById('next-step').href = '#/setup/new_project_overview';
  };

  const nextStep = () => {
    if (props.currentPrjProps.country) {
      return "#/setup/new_project_overview";
    } else {
      return null;
    }
  };

  return (
    <section>
      <h2>Finally, let’s confirm your eligibility.</h2>
      <h4>Tell us where you’re based and confirm a few other details before we proceed.</h4>
      <button id='country-button'>{props.currentPrjProps.country || "Select your country"}</button>
      <ul>
        {
          countries.map((country) => {
            return <li
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
        <a id='next-step' href={nextStep()}>Continue</a>
      </section>
    </section>
  );
};

export default Setup3;
