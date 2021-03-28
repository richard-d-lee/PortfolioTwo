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
  } else if (props.page === 'artwork') {
    return <Artwork />
  } else if (props.page === 'landing') {
    return (
      <div className="landing">
        <MyCard link="About Me" handler={props.about} />
        <MyCard link="Projects" handler={props.projects}/>
        <MyCard link="Artwork"  handler={props.artwork}/>
      </div>
    );
  }
}

export default Landing;