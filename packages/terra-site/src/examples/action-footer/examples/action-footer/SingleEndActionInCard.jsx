import React from 'react';
import ActionFooter from 'terra-action-footer';
import Button from 'terra-button';
import Card from 'terra-card';

const SingleEndActionInCardExample = () => (
  <Card>
    <Card.Body>
      Lorem ipsum
    </Card.Body>
    <ActionFooter
      end={<Button text="End Action" />}
    />
  </Card>
);

export default SingleEndActionInCardExample;
