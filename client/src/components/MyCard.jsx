import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import gif from './images/giphy.gif'

function MyCard(props) {
  return (
    <div className="full-card">
      <Card className="my-card" style={{ width: '100%', backgroundColor: "black", borderRadius: '15px', border: "1px solid white" }}>
        <Card.Img variant="top" className="card-image" src={props.gif} style={{ width: '25rem', height: '25rem', borderRadius: '15px' }}>
        </Card.Img>
        <Button 
        onClick={props.handler}
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