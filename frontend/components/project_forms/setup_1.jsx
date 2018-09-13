import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

const Setup1 = (props) => {

  const categories = [
    "Art", "Comics", "Crafts", "Dance", "Design", "Fashion",
    "Film & Video", "Food", "Games", "Journalism", "Music", "Photography",
    "Publishing", "Technology", "Theater"
  ];

  const submitCategory = (e) => {
    props.receiveCurrentProjectProps({category: e.target.innerHTML});
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

export default Setup1;
