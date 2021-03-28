import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import gif from './images/giphy.gif';
import Button from 'react-bootstrap/Button';

function Artwork(props) {
  return (
    <div className="artwork">
      <Card className="my-card" style={{ width: '11.88%', backgroundColor: "black", borderRadius: '15px', border: "1px solid white" }}>
        <Card.Img variant="top" className="card-image" src={gif} style={{ width: '14rem', height: 'auto', borderRadius: '15px' }}>
        </Card.Img>
        <Button
          type="button"
          variant="light"
          className="artwork-button">
          Card
        </Button>
      </Card>
    </div>
  )
}

export default Artwork;