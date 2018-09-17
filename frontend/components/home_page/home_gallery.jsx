import React from 'react';
import { Link } from 'react-router-dom';

const HomeGallery = (props) => {
  return (
    <main id='home-gallery'>
      <h1>{props.categories[props.category_id].name}</h1>
      <section id='galleries'>
        <aside id='feature'>
          <p>FEATURED PROJECT</p>
            <div id='featured-image'>
              <Link to='/'></Link>
              <h1>Title Goes Here</h1>
              <h4>by Admin Authorson</h4>
            </div>
        </aside>
        <aside id='gallery-options'>
          <ul>
            <li><div id='gallery-thumb'></div>test li</li>
          </ul>
        </aside>
      </section>
    </main>
  );
};

export default HomeGallery;
