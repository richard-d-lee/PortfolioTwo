import React, { useState, useEffect } from 'react';
import MyCard from './MyCard.jsx';
import About from './About.jsx';

function Landing(props) {
  if (props.page === 'about') {
    return <About />
  } else if (props.page === 'landing') {
    return (
      <div className="landing">
        <MyCard link="About Me" handler={props.about} />
        <MyCard link="Projects" />
        <MyCard link="Artwork" />
      </div>
    );
  }
}

export default Landing;