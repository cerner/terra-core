import React from 'react';
import Card from 'terra-card';

const CardPaddingHR = () => (
  <div>
    <Card>
      <Card.Body>Hello World Above The Line!!</Card.Body>
      <hr style={{ border: '0 none', borderTop: '1px solid #c8cacb', boxSizing: 'border-box', height: '1px', margin: '0' }} />
      <Card.Body>Hello World Below The Line!!</Card.Body>
    </Card>
  </div>
);

export default CardPaddingHR;
