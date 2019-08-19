import React from 'react';
import Button from 'terra-button';
import ActionFooter from 'terra-action-footer';
import ExampleTemplate from '../../common/ExampleTemplate';

export default () => (
  <ExampleTemplate>
    <ActionFooter
      end={<Button text="End Action" />}
    />
  </ExampleTemplate>
);
