import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import gif from './giphy.gif'

function MyCard(props) {
  return (
    <div className="full-card">
      <Card className="my-card" style={{ width: '100%', backgroundColor: "black", borderRadius: '15px', border: "1px solid white" }}>
        <Card.Img variant="top" className="card-image" src={gif} style={{ width: '25rem', height: 'auto', borderRadius: '15px' }}>
        </Card.Img>
        <Button
          type="button"
          variant="light"
          className="button">
          {props.link}
        </Button>
      </Card>
    </div>
  )
}

export default MyCard;