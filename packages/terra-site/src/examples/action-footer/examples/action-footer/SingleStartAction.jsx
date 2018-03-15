import React from 'react';
import ActionFooter from 'terra-action-footer';
import ExampleTemplate from '../template';

export default () => (
  <ExampleTemplate>
    <ActionFooter
      start={<a href="/#/site/action-footer">Start Action</a>}
    />
  </ExampleTemplate>
);
