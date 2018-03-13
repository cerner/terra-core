import React from 'react';
import ActionFooter from 'terra-action-footer';
import Button from 'terra-button';
import ExampleTemplate from '../template';

export default () => (
  <ExampleTemplate>
    <ActionFooter
      end={<Button text="End Action" />}
    />
  </ExampleTemplate>
);
