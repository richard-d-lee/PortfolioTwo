import React, { useState } from 'react';
import gif from './images/giphy.gif';

function Project(props) {
  return (
    <div className="projects">
        <div className="project">
            <center>
                <label id="project-title">My Project</label>
            </center>
            <img src={gif}></img>
            <center>
                <label id="project-description">These are my projects!</label>
            </center>
        </div>
    </ div>
  )
}

export default Project;