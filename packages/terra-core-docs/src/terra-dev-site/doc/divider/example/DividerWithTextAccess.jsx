import React from 'react';
import Card from 'terra-card';
import Divider from 'terra-divider';
import DividerExampleTemplate from './DividerExampleTemplate';

const currentDate = 'November 12, 1955';

const DividerWithTextAccess = () => (
  <div>
    <Card>
      <Card.Body>
        <DividerExampleTemplate>
          <Divider text={currentDate} level={3} />
        </DividerExampleTemplate>
      </Card.Body>
    </Card>
  </div>
);

export default DividerWithTextAccess;
