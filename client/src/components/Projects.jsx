import React, { useState } from 'react';
import quistory from './images/quistory.gif';
import related from './images/RI.gif';
import coming from './images/coming.gif';
import background from './images/background.jpg'

function Projects(props) {
  return (
    <center>
      <div className="projects" style={{ 'backgroundImage': `url(${background})` }}>
        <div className="label-and-gif">
          <div id="project-title" onClick={props.related}>
            <p id="project-title-text">
              <center>
                {'Cart Micro-Service'}
              </center>
            </p>
          </div>
          <img id="project-gif" src={related}></img>
        </div>
        <div className="label-and-gif">
          <div id="project-title" onClick={props.quistory}>
            <p id="project-title-text">
              <center>
                {'Quistory'}
              </center>
            </p>
          </div>
          <img id="project-gif" src={quistory}></img>
        </div>
        <div className="label-and-gif">
          <div id="project-title" onClick={props.lgm}> 
            <p id="project-title-text">
              <center>
                {'Lee Media Inc'}
              </center>
            </p>
          </div>
          <img id="project-gif" src={coming}></img>
        </div>
      </ div>
    </center>
  )
}

export default Projects;