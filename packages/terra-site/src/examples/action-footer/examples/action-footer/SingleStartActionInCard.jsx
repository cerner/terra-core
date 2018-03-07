import React from 'react';
import ActionFooter from 'terra-action-footer';
import Card from 'terra-card';

const SingleStartActionInCardExample = () => (
  <Card>
    <Card.Body>
      Lorem ipsum
    </Card.Body>
    <ActionFooter
      start={<a href="/#/site/action-footer">Start Action</a>}
    />
  </Card>
);

export default SingleStartActionInCardExample;
