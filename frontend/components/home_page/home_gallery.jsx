import React from 'react';
import { Link } from 'react-router-dom';

const HomeGallery = (props) => {
  debugger
  return (
    <main id='home-gallery'>
      <h1>{props.categories[props.currCatId].name}</h1>
      <section id='galleries'>
        <aside id='feature'>
          <p>FEATURED PROJECT</p>
            <div id='featured-image'>
              <Link to={`/project/${props.projectsArr[0].id}`}><img src={props.projectsArr[0].imageUrl}></img></Link>
            </div>
            <div id='feature-titles'>
              <h1>{props.projectsArr[0].title}</h1>
              <h4>{`by ${props.users[props.projectsArr[0].admin_id].name}`}</h4>
            </div>
        </aside>
        <aside id='gallery-options'>
          <ul>
            {
              props.projectsArr.map((project, idx) => {
                if (idx === 0) {
                  return;
                } else {
                  return <li>
                    <div id='gallery-thumb'><img src={project.imageUrl}></img></div>
                    <div>
                      <Link to={`/project/${project.id}`}>{project.title}</Link>
                      <p>{project.subtitle}</p>
                    </div>
                  </li>;
                }
              })
            }
          </ul>
        </aside>
      </section>
    </main>
  );
};

export default HomeGallery;
