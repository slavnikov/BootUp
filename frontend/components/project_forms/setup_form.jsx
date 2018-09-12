import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Setup1 from './setup_1';
import Setup2 from './setup_2';
import Setup3 from './setup_3';

const SetupForm = (props) => {

  return (
    <div>
      <header></header>
      <p> setup form</p>
      <section>
        <Route path='/setup/1' component={() => {
            return <Setup1
              currentPrjProps={props.currentPrjProps}
              receiveProjectProps={props.receiveProjectProps}
            />;
          }}/>
        <Route path='/setup/2' render={() => {
            if (props.currentPrjProps.category) {
              return <Setup2
                currentPrjProps={props.currentPrjProps}
                receiveProjectProps={props.receiveProjectProps}
              />;
            } else {
              return <Redirect to='/setup/1'/>;
            }
          }}/>
        <Route path='/setup/3' render={() => {
            if (props.currentPrjProps.subtitle) {
              return <Setup3
                currentPrjProps={props.currentPrjProps}
                receiveProjectProps={props.receiveProjectProps}
              />;
            } else {
              return <Redirect to='/setup/2'/>;
            }
          }}/>
      </section>
    </div>
  );
};

export default SetupForm;
