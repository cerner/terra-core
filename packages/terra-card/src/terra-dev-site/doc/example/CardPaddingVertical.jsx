import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Card from 'terra-card/lib/Card';

const CardPaddingVertical = () => (
  <div>
    <Card>
      <Card.Body hasPaddingHorizontal={false}>Hello World!!</Card.Body>
    </Card>
  </div>
);

export default CardPaddingVertical;
