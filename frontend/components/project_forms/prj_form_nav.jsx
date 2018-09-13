import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectFormNavigation = (props) => {
  return (
    <nav>
      <NavLink to='/setup/setup/overview'>Exit to Project Overview</NavLink>
      <NavLink to='/setup/new_project/basics'>Basics</NavLink>
      <NavLink to='/setup/new_project/story'>Story</NavLink>
    </nav>
  );
};

export default ProjectFormNavigation;
