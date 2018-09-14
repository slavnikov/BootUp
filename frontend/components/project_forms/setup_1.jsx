import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

const Setup1 = (props) => {

  const categories = [
    "Art", "Comics", "Crafts", "Dance", "Design", "Fashion",
    "Film", "Food", "Games", "Journalism", "Music", "Photography",
    "Publishing", "Technology", "Theater"
  ];

  const submitCategory = (e) => {
    props.receiveCurrentProjectProps({category: e.target.id});
    document.getElementById('button-text').innerHTML = e.currentTarget.id;
    document.getElementById('button-text').classList.add('black-text');
    document.getElementById('next-step').href = '#/setup/2';
    styleSelected();
    menuDrop();
  };

  const styleSelected = () => {
    const lis = $("li");
    lis.removeClass('pre-selected');
    lis.each((idx, li) => {
      li.innerHTML=`<p>${li.id}</p>`;
    });
    const chosen = $(`#${props.tempPrjProps.category}`);
    chosen.addClass('pre-selected');
    chosen.html(`<p>${chosen.attr('id')}</p><i class="fa fa-check-circle" id="check"></i>`);
  };

  const nextStep = () => {
    if (props.tempPrjProps.category) {
      return "#/setup/2";
    } else {
      return null;
    }
  };

  const menuDrop = () => {
    const ele = document.getElementById('ddm');
    ele.classList.toggle('hidden');
    ele.classList.toggle('drop-down');
  };

  return (
    <div>
      <div className="pg-counter">
        <p >1 of 3</p>
      </div>
    <section className='setup-form'>
      <h2>First, let’s get you set up.</h2>
      <h4>Pick a project category to connect with a specific community. You can always update this later.</h4>
      <button id='category-button' onClick={menuDrop}><p id='button-text' className="button-text">{props.tempPrjProps.category || "Select your category"}</p><i className="fa fa-caret-down" id="button-arrow"></i></button>
        <ul className='hidden' id="ddm">
          {
            categories.map((category, idx) => {
              return <li
                key={idx}
                id={category}
                onClick={
                  submitCategory
                }
                >
                <p>{category}</p></li>;
            })
          }
        </ul>
      <section className='bottom-section'>
        <a id='next-step' href={nextStep()}>Next: Project Idea</a>
      </section>
    </section>
  </div>
  );
};

export default Setup1;
