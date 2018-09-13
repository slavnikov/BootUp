import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Setup1 from './setup_1';
import Setup2 from './setup_2';
import Setup3 from './setup_3';
import NewPrjOverview from './new_prj_overview';
import ProjectBasics from './prj_basics';
import ProjectStory from './prj_story';

const SetupForm = (props) => {

  return (
    <div>
      <header></header>
      <p> setup form</p>
      <section>
        <Route path='/setup/1' render={() => {
          return <Setup1
            currentPrjProps={props.currentPrjProps}
            receiveCurrentProjectProps={props.receiveCurrentProjectProps}
          />;
        }}/>
        <Route path='/setup/2' render={() => {
          if (props.currentPrjProps.category) {
            return <Setup2
              currentPrjProps={props.currentPrjProps}
              receiveCurrentProjectProps={props.receiveCurrentProjectProps}
            />;
          } else {
            return <Redirect to='/setup/1'/>;
          }
        }}/>
        <Route path='/setup/3' render={() => {
          if (props.currentPrjProps.subtitle) {
            return <Setup3
              currentPrjProps={props.currentPrjProps}
              receiveCurrentProjectProps={props.receiveCurrentProjectProps}
            />;
          } else {
            return <Redirect to='/setup/2'/>;
          }
        }}/>
        <Route path='/setup/new_project_overview' render={() => {
          return <NewPrjOverview
            currentPrjProps={props.currentPrjProps}
            receiveCurrentProjectProps={props.receiveCurrentProjectProps}
            currentUser={props.currentUser}
          />;
        }}/>
        <Route path='/setup/basics' render={() => {
          return <ProjectBasics
            currentPrjProps={props.currentPrjProps}
            receiveCurrentProjectProps={props.receiveCurrentProjectProps}
          />;
        }}/>
      <Route path='/setup/story' render={() => {
          return <ProjectStory
            currentPrjProps={props.currentPrjProps}
            receiveCurrentProjectProps={props.receiveCurrentProjectProps}
          />;
        }}/>
      </section>
    </div>
  );
};

export default SetupForm;
