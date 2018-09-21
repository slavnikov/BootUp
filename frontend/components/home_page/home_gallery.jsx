import React from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../util/loading_spinner';

const HomeGallery = (props) => {
  if(
    !Object.keys(props.projects).length ||
    !Object.keys(props.categories).length ||
    !Object.keys(props.users).length
  )
  {
    return <LoadingSpinner/>;
  }

  const currCatId = props.currCatId || Object.keys(props.categories)[0];

  let projectsArr = Object.values(props.projects).filter((project) => {
    return project.category_id === parseInt(currCatId) && project.complete;
  });


  if (projectsArr.length < 1) {
    return <LoadingSpinner/>;
  }

  projectsArr = projectsArr.sort((a, b) => {
    return Date.parse(b.updated_at) - Date.parse(a.updated_at);
  });

  const backgroundImage = (project) => {
    return (
      {
        backgroundImage: `url(${project.imageUrl})`
      }
    );
  };

  return (
    <main id='home-gallery'>
      <h1>{props.categories[currCatId].name}</h1>
      <section id='galleries'>
        <aside id='feature'>
          <p>FEATURED PROJECT</p>

              <Link to={`/project/${projectsArr[0].id}`}><div id='featured-image' style={backgroundImage(projectsArr[0])}></div></Link>

            <div id='feature-titles'>
              <h1>{projectsArr[0].title}</h1>
              <h4>{`by ${props.users[projectsArr[0].admin_id].name}`}</h4>
              <h5>{`${projectsArr[0].percentComplete}% FUNDED`}</h5>
            </div>
        </aside>
        <aside id='gallery-options'>
          <ul>
            {
              projectsArr.map((project, idx) => {
                if (idx === 0 || idx > 6) {
                  return;
                } else if (!project.complete) {
                  return;
                } else {
                  return <li key={idx}>
                    <Link to={`/project/${project.id}`}><div id='gallery-thumb'><img src={project.imageUrl}></img></div></Link>
                    <div>
                      <Link to={`/project/${project.id}`}>{project.title}</Link>
                      <p>{project.subtitle}</p>
                      <p>{`${project.percentComplete}% complete`}</p>
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
