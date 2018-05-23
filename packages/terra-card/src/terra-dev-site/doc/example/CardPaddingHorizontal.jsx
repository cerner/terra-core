import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Card from 'terra-card/lib/Card';

const CardPaddingHorizontal = () => (
  <div>
    <Card>
      <Card.Body hasPaddingVertical={false}>Hello World!!</Card.Body>
    </Card>
  </div>
);

export default CardPaddingHorizontal;
