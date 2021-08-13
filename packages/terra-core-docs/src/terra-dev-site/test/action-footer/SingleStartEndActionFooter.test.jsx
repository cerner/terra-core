import React from 'react';
import Button from 'terra-button';
import ActionFooter from 'terra-action-footer/lib/ActionFooter';

export default () => (
  <ActionFooter
    start={<Button text="Start Action" />}
    end="FakeLink End Action"
  />
);
