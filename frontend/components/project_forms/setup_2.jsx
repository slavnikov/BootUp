import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

const Setup2 = (props) => {
  const nextStep = () => {
    if (props.currentPrjProps.subtitle) {
      return "#/setup/3";
    } else {
      return null;
    }
  };

  const submitSubtitle = () => {
    props.receiveCurrentProjectProps({
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

export default Setup2;
