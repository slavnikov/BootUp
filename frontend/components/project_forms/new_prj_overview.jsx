import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';


const NewPrjOverview = (props) => {
  let completeCount = 0;
  let redirect = false;

  const checkForCompleteness = (prj_params) => {
    const all_done = prj_params.every((param) => {
      return props.currentProject[param];
    });

    if (all_done) {
      completeCount++;
      return <i className="fa fa-check nav-item-complete"></i>;
    } else {
      return <i className="fa fa-check"></i>;
      }
  };

  const deleteProject = () => {
    props.deleteProject(props.currentProject.id);
    props.clearCurrentProject();
    return (
      <Redirect to='/'/>
    );
  };

  return (
    <main className="overview-wrapper">
      <header>
        <h1>{props.currentProject.category} Project</h1>
        <h3>by {props.currentUser.name}</h3>
      </header>
      <section className='overview-nav'>
        <h2>Project overview</h2>
        <Link to='/setup/new_project/basics'>
          {checkForCompleteness(['title', 'subtitle', 'category', 'country', 'end_date', 'pledge_goal'])}
          <div>
            <h3>Basics</h3>
            <p>Add an image, set your funidng goal, and more.</p>
          </div>
        </Link>
        <Link to='/setup/new_project/story'>
          {checkForCompleteness(['story'])}
          <div>
            <h3>Story</h3>
            <p>Add a detailed project description.</p>
          </div>
        </Link>
      </section>
      <h4>{completeCount} of 2 complete</h4>
      <p>When everything is done, your project will go live instantly.</p>
      <footer>
        <button onClick={deleteProject}><i className="fa fa-trash-o"></i>Delete Project</button>
      </footer>
    </main>
  );

};

export default NewPrjOverview;
