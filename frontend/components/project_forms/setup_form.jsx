import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { Setup1C, Setup2C, Setup3C, NewPrjOverviewC, ProjectBasicsC, ProjectStoryC} from './setup_container';

const SetupForm = (props) => {
  return (
    <div>
        <Route path='/setup/1' render={() => {
          return <Setup1C/>;
        }}/>
        <Route path='/setup/2' render={() => {
          if (props.tempPrjProps.category) {
            return <Setup2C/>;
          } else {
            return <Redirect to='/setup/1'/>;
          }
        }}/>
        <Route path='/setup/3' render={() => {
          if (props.tempPrjProps.subtitle) {
            return <Setup3C/>;
          } else {
            return <Redirect to='/setup/2'/>;
          }
        }}/>
      <Route path='/setup/project/overview' render={() => {
            if (props.currentProject) {
              return <NewPrjOverviewC/>;
            } else {
              return <Redirect to='/setup/project/overview'/>;
            }
        }}/>
      <Route path='/setup/new_project/basics' render={() => {
          return <ProjectBasicsC/>;
        }}/>
      <Route path='/setup/new_project/story' render={() => {
          return <ProjectStoryC/>;
        }}/>
    </div>
  );
};

export default SetupForm;
