import React, { useState } from 'react';
import MyCard from './MyCard.jsx';


function Landing(props) {
  return (
    <div className="landing">
      <MyCard link="About Me" clicker={props.clicker}/>
      <MyCard link="Projects"/>
      <MyCard link="Artwork"/>
    </ div>
  );
}

export default Landing;