import React from 'react';
import { Route, Link } from 'react-router-dom';

const SetupForm = (props) => {
  const Setup1 = () => {

    const categories = [
      "Art", "Comics", "Crafts", "Dance", "Design", "Fashion",
      "Film & Video", "Food", "Games", "Journalism", "Music", "Photography",
      "Publishing", "Technology", "Theater"
    ];

    const submitCategory = (e) => {
      props.receiveProjectProps({category: e.target.innerHTML});
      document.getElementById('category-button').innerHTML = e.currentTarget.innerHTML;
      document.getElementById('next-step').href = '#/setup/2';
    };

    const nextStep = () => {
      if (props.currentPrjProps.category) {
        return "#/setup/2";
      } else {
        return null;
      }
    };

    return (
      <section>
        <h2>First, let’s get you set up.</h2>
        <h4>Pick a project category to connect with a specific<br></br> community. You can always update this later.</h4>
        <button id='category-button'>{props.currentPrjProps.category || "Select your category"}</button>
        <ul>
          {
            categories.map((category) => {
              return <li
                id={category}
                onClick={
                  submitCategory
                }
                >
                {category}</li>;
            })
          }
        </ul>
        <section>
          <a id='next-step' href={nextStep()}>Next: Project Idea</a>
        </section>
      </section>
    );
  };

  const Setup2 = () => {
    const nextStep = () => {
      if (props.currentPrjProps.subtitle) {
        return "#/setup/3";
      } else {
        return null;
      }
    };

    const submitSubtitle = () => {
      props.receiveProjectProps({
        subtitle: document.getElementById("subtitle-text").value
      });
    };

    return (
      <section>
        <h2>Describe what you’ll be creating.</h2>
        <h4>And don’t worry, you can edit this later, too.</h4>
        <textarea
          id ="subtitle-text"
          maxLength="135"
          onChange={
            (e) => {
              let chars = document.getElementById('char-counter');
              chars.innerHTML = e.currentTarget.value.length;
              if (e.currentTarget.value.length > 0) {
                document.getElementById('next-step').href = '#/setup/3';
              } else {
                document.getElementById('next-step').href = null;
              }
            }
          }>
        </textarea>
        <p id='char-counter'>0</p><p>/135</p>
        <section>
          <a
            id='next-step'
            href={nextStep()}
            onClick={submitSubtitle}>
            Next: Location
          </a>
        </section>
      </section>
    );
  };

  const Setup3 = () => {

    const countries = [
      'US', 'UK', 'Canada', 'Australia',' New Zealand', 'the Netherlands', 'Denmark',
      'Ireland', 'Norway', 'Sweden', 'Germany', 'France', 'Spain', 'Italy', 'Austria',
      'Belgium', 'Switzerland', 'Luxembourg', 'Hong Kong', 'Singapore', 'Mexico', 'Japan'
    ];

    const submitCountry = (e) => {
      props.receiveProjectProps({country: e.target.innerHTML});
      document.getElementById('country-button').innerHTML = e.currentTarget.innerHTML;
      document.getElementById('next-step').href = '#/setup/4';
    };

    const nextStep = () => {
      if (props.currentPrjProps.country) {
        return "#/setup/4";
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


  return (
    <div>
      <header></header>
      <p> setup form</p>
      <section>
        <Route path='/setup/1' component={ Setup1 }/>
        <Route path='/setup/2' component={ Setup2 }/>
        <Route path='/setup/3' component={ Setup3 }/>
      </section>
    </div>
  );
};

export default SetupForm;
