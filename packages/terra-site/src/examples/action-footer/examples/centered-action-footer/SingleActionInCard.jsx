import React from 'react';
import Card from 'terra-card';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';

const SingleActionInCardExample = () => (
  <Card>
    <Card.Body>
      Lorem ipsum
    </Card.Body>
    <CenteredActionFooter
      center={<a href="/#/site/action-footer/centered">A link</a>}
    />
  </Card>
);

export default SingleActionInCardExample;
