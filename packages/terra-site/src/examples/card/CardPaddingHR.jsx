import React from 'react';
import Card from 'terra-card';

const CardPaddingHR = () => (
  <div>
    <Card>
      <Card.Padding hasPaddingHorizontal hasPaddingVertical>Hello World Above Line!!</Card.Padding>
      <hr />
      <Card.Padding hasPaddingHorizontal hasPaddingVertical>Hello World Bellow Line!!</Card.Padding>
    </Card>
  </div>
);

export default CardPaddingHR;
