import React, { useState, useEffect } from 'react';
import MyCard from './MyCard.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import gif from './images/giphy.gif';
import JB from './images/JB.gif';
import background from './images/background.jpg';
import coming from './images/coming.gif';
import quistory from './images/quistory.gif';
import related from './images/RI.gif';
import Project from './Project.jsx';

function Landing(props) {
  if (props.page === 'about') {
    return <About />
  } else if (props.page === 'projects') {
    return <Projects
      lgm={props.lgm}
      related={props.related}
      quistory={props.quistory}
    />
  } else if (props.page === 'lgm') {
    return <Project
      gif={coming}
      return={props.projects}
      github="https://github.com/richard-d-lee/LeeGamingAndMedia"
      youtube="https://www.youtube.com/channel/UC4kA1ilL7qGJkSfx7RCDQsQ"
      title="Lee Media Inc"
      description="My current main focus (after I launch this portfolio) is building a website which will serve as a central hub for all of my media and artistic endeavors. I have many passions and shuffling between YouTube, SoundCloud, Imgur, and social media sites is not my ideal method of exposing my art to the world. Bootstrap and MongoDB are helping me to build a wide variety of user features and a fun, safe environment for others to discuss and learn about the things which motivate us together."
    />
  } else if (props.page === 'quistory') {
    return <Project
      gif={quistory}
      return={props.projects}
      github="https://github.com/richard-d-lee/ABetterQuiz"
      youtube="https://youtu.be/nsaFjZtRW14"
      title="Quistory"
      description="Quistory is a personal passion project which has helped me to learn much about the rest of the world - and will one day hopefully guide others to do the same. I have always been eager to learn about any and all countries so I used MongoDB and React to create a place for people to learn about any country that they wish. This work in progress will have achievements, leaderboards, forums, and many other features to help users accelerate their geo-history whichever way is best for them."
    />
  } else if (props.page === 'related') {
    return <Project
      return={props.projects}
      gif={related}
      github="https://github.com/kwrnFec/related_items_module"
      youtube="https://www.youtube.com/watch?v=xj7kOZeVqQw"
      title="Cart Micro-service"
      description="One of the first major projects I undertook as a software developer was a microservice for an e-commerce website using the Greenfield API. I worked with a team of others to create a cohesive layout which enabled shoppers to add and remove items to a cart, compare their features and prices, and view their outfit and its images in greater detail. Our team worked within the limitations given to us by the business' requirements and produced an exceptional product."
    />
  } else if (props.page === 'landing') {
    return (
      <div className="landing" style={{ 'backgroundImage': `url(${background})` }}>
        <div className="about-card">
          <MyCard gif={JB} link="About Me" handler={props.about} />
        </div>
        <div className="project-card">
          <MyCard gif={gif} link="Projects" handler={props.projects} />
        </div>
      </div>
    );
  }
}

export default Landing;