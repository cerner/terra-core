import React from 'react';
import Button from 'terra-button/lib/Button';
import Card from 'terra-card';

const A11yIconButton = () => (
  <Card>
    <Card.Body>
      <h3>Allergies</h3>
      <p>Current Allergies: Cats, Dogs, Dust, Moulds</p>
      <Button aria-label="Add Allergies" text="Add" />

    </Card.Body>
  </Card>
);

export default A11yIconButton;
