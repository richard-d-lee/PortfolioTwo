import React, { useState } from 'react'; 
import Project from './Project.jsx';

function Projects(props) {
  return (
    <div className="projects">
        <Project 
          title="Cart Micro-service"
          description="One of the first major projects I undertook as a software developer was a microservice for an e-commerce website using the Greenfield API. I worked with a team of others to create a cohesive layout which enabled shoppers to add and remove items to a cart, compare their features and prices, and view their outfit and its images in greater detail. Our team worked within the limitations given to us by the business' requirements and produced an exceptional product."
        />
        <Project 
          title="Quistory"
          description="Quistory is a personal passion project which has helped me to learn much about the rest of the world - and will one day hopefully guide others to do the same. I have always been eager to learn about the world and so I used MongoDB and React to create a place for people to learn about any country that they wish. This work in progress will have achievements, leaderboards, forums, and many other features to help users accelerate their geo-history whichever way is best for them."
        />
        <Project 
          title="Lee Gaming and Media"
          description="My current main focus (after I launch this portfolio) is building a website which will serve as a central hub for all of my media and artistic endeavors. I have many passions and shuffling between YouTube, SoundCloud, Imgur, and social media sites is not my ideal method of exposing my art to the world. Bootstrap and MongoDB are helping me to build a wide variety of user features and a fun, safe environment for others to discuss and learn about the things which motivate us together."
        />
    </ div>
  )
}

export default Projects;