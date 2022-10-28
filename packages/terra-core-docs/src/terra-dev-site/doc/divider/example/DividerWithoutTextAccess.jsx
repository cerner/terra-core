import React from 'react';
import Divider from 'terra-divider';
import Card from 'terra-card';
import DividerExampleTemplate from './DividerExampleTemplate';

const DividerWithoutTextAccess = () => (
  <Card>
    <Card.Body>
      <DividerExampleTemplate>
        <Divider />
      </DividerExampleTemplate>
    </Card.Body>
  </Card>
);

export default DividerWithoutTextAccess;
