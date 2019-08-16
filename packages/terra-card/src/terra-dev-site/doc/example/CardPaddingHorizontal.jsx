import React from 'react';
import Card from 'terra-card/lib/Card';

const CardPaddingHorizontal = () => (
  <div>
    <Card>
      <Card.Body hasPaddingVertical={false}>Hello World!!</Card.Body>
    </Card>
  </div>
);

export default CardPaddingHorizontal;
