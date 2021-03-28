import React, { useState } from 'react'; 
import Project from './Project.jsx';

function Projects(props) {
  return (
    <div className="projects">
        <Project />
        <Project />
        <Project />
    </ div>
  )
}

export default Projects;