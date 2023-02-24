import React from 'react';
import Card from 'terra-card';
import ProgressBar from 'terra-progress-bar';

const ProgressBarExampleAccess = () => (
  <div>
    <Card>
      <Card.Body>
        <ProgressBar valueText="Progress is 15%" value={15} />
      </Card.Body>
    </Card>
  </div>
);

export default ProgressBarExampleAccess;
