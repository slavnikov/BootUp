import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

const NewPrjOverview = (props) => {
  return (
    <main className="overview-wrapper">
      <header>
        <h1>{props.currentProject.category} Project</h1>
        <h3>by {props.currentUser.name}</h3>
      </header>
      <section className='overview-nav'>
        <h2>Project overview</h2>
        <Link to='/setup/new_project/basics'>
          <h3>Basics</h3>
          <p>Add an image, set your funidng goal, and more.</p>
        </Link>
        <Link to='/setup/new_project/story'>
          <h3>Story</h3>
          <p>Add a detailed project description.</p>
        </Link>
      </section>
    </main>
  );

};

export default NewPrjOverview;
