import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imageOne from './images/MEnJB.jpg';
import imageTwo from './images/MEnJS.jpg';
import imageThree from './images/Food.jpg';
import duo from './images/duo.png';
import reddit from './images/reddit.png';
import github from './images/github.png';
import background from './images/background.jpg'

function About(props) {
  return (
    <div className="about" style={{'backgroundImage': `url(${background})`}}>
      <div className="about-left">
        <center>
          <div className="carousel">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imageOne}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Me and the Dog</h3>
                  <p>Junebug is fiercely loyal and incredibly loving. I'm lucky to have such a tough mutt in my corner.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imageTwo}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>My Girlfriend Jesse</h3>
                  <p>Jesse has provided major love and support in my life and I couldn't accomplish the things I do without her at my side.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imageThree}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Steamboat Springs</h3>
                  <p>Jesse and I love to travel. She took this photo while we were eating well at Taco Cabo in Steamboat Springs.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </center>
        <div className="sites">
          <div id="sites-text">
            <center>
              <label>A few of my favorite websites.</label>
            </center>
          </div>
          <div id="sites-buttons">
            <a target="_blank" rel="noopener noreferrer" href="https://www.duolingo.com/register">
              <img id='duo' src={duo} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com">
              <img id='reddit' src={reddit} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/richard-d-lee">
              <img id='github' src={github} />
            </a>
          </div>
        </div>
      </div>
      <div className="bio">
        <p id="bio-text">
          <center>
            If talking about yourself is tacky, what does that say for someone who creates a website about themself?
          </center>
          <br />
          <center>

            Anyway, My name is Richard Lee, but my friends and family call me Buz. I am a full stack Javascript developer, occasional artist, and reluctant media producer. I love developing accessible web applications and making content which reflects my desire to bring people together. I have many goals as an engineer and can always use an extra eye on my progress. I'm always happy to help and receive help.
          </center>
          <br />
          <center>
            Please do not hesitate to reach out with opportunities or questions using my resume below. Thank you for stopping by!
          </center>
        </p>
      </div>
    </div >
  )
}

export default About;