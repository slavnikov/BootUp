import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

const NewPrjOverview = (props) => {
  return (
    <main>
      <h1>{props.currentPrjProps.category} Project</h1>
      <h3>by {props.currentUser.name}</h3>
      <h2>Prject overview</h2>
      <Link to='/setup/basics'>
        <h3>Baiscs</h3>
        <p>Add an image, set your funidng goal, and more.</p>
      </Link>
      <Link to='setup/story'>
        <h3>Story</h3>
        <p>Add a detailed project description.</p>
      </Link>
    </main>
  );

};

export default NewPrjOverview;
