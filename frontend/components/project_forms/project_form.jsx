import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

const ProjectForm = (props) => {

  return (
    <div>
      <header></header>
      <p> setup form</p>
      <section>
        <Route path='/setup/1' component={ Setup1 }/>
        <Route path='/setup/2' render={() => {
            if (props.currentPrjProps.category) {
              return <Setup2/>;
            } else {
              return <Redirect to='/setup/1'/>;
            }
          }}/>
        <Route path='/setup/3' render={() => {
            if (props.currentPrjProps.subtitle) {
              return <Setup3/>;
            } else {
              return <Redirect to='/setup/2'/>;
            }
          }}/>
      </section>
    </div>
  );

};

export default ProjectForm;
