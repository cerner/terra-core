import React from 'react';
import Hyperlink from 'terra-hyperlink';
import ActionFooter from 'terra-action-footer';
import ExampleTemplate from '../../common/ExampleTemplate';

export default () => (
  <ExampleTemplate>
    <ActionFooter
      start={<Hyperlink href="#">Start Action</Hyperlink>}
    />
  </ExampleTemplate>
);
