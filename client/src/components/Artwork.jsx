import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import gif from './images/giphy.gif';
import Button from 'react-bootstrap/Button';

function Artwork(props) {
  return (
    <div className="artwork">
      <div id="top-two">
        <Card className="art-card" style={{ backgroundColor: "black", borderRadius: '15px', border: "1px solid white" }}>
          <Card.Img variant="top" className="card-image" src={gif} style={{ width: '14rem', height: 'auto', borderRadius: '15px' }}>
          </Card.Img>
          <Button
            type="button"
            variant="light"
            className="artwork-button">
            Acrylic
        </Button>
        </Card>
        <Card className="art-card" style={{ backgroundColor: "black", borderRadius: '15px', border: "1px solid white" }}>
          <Card.Img variant="top" className="card-image" src={gif} style={{ width: '14rem', height: 'auto', borderRadius: '15px' }}>
          </Card.Img>
          <Button
            type="button"
            variant="light"
            className="artwork-button">
            Digital
          </Button>
        </Card>
      </div>
      <div id="bottom-two">
        <Card className="art-card" style={{ backgroundColor: "black", borderRadius: '15px', border: "1px solid white" }}>
          <Card.Img variant="top" className="card-image" src={gif} style={{ width: '14rem', height: 'auto', borderRadius: '15px' }}>
          </Card.Img>
          <Button
            type="button"
            variant="light"
            className="artwork-button">
            Writing
          </Button>
        </Card>
        <Card className="art-card" style={{ backgroundColor: "black", borderRadius: '15px', border: "1px solid white" }}>
          <Card.Img variant="top" className="card-image" src={gif} style={{ width: '14rem', height: 'auto', borderRadius: '15px' }}>
          </Card.Img>
          <Button
            type="button"
            variant="light"
            className="artwork-button">
            Other
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default Artwork;