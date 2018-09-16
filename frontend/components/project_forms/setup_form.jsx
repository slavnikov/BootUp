import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { Setup1C, Setup2C, Setup3C, NewPrjOverviewC, ProjectBasicsC, ProjectStoryC} from './setup_container';
import {AuthRoute, ProtectedRoute} from '../../util/route_util';

const SetupForm = (props) => {
  return (
    <div>
      <Switch>
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
        <ProtectedRoute path='/setup/project/overview' component={ NewPrjOverviewC }/>
          <ProtectedRoute path='/setup/project/basics' component={ ProjectBasicsC }/>
        <ProtectedRoute path='/setup/project/story' component={ ProjectStoryC }/>
      </Switch>
    </div>
  );
};

export default SetupForm;
