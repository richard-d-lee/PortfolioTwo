import React, { useState, useEffect } from 'react';
import MyCard from './MyCard.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Artwork from './Artwork.jsx';

function Landing(props) {
  if (props.page === 'about') {
    return <About />
  } else if (props.page === 'projects') {
    return <Projects />
  } else if (props.page === 'artwork' || props.page === 'digital') {
    return <Artwork digital={props.digital} page={props.page}/>
  } else if (props.page === 'landing') {
    return (
      <div className="landing">
        <div className="about-card">
          <MyCard link="About Me" handler={props.about} />
        </div>
        <div className="project-card">
          <MyCard link="Projects" handler={props.projects}/>
        </div>
      </div>
    );
  }
}

export default Landing;