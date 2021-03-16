import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import imageOne from './images/MEnJB.jpg'
import imageTwo from './images/MEnJS.jpg'
import imageThree from './images/Food.jpg'

function About(props) {
  return (
    <div className="about">
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
                  <h3>Me With My Dog</h3>
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
          <div id="sites-text"></div>
          <div id="sites-buttons"></div>
        </div>
      </div>
      <div className="bio">
      </div>
    </div>
  )
}

export default About;