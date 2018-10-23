import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ActionFooter from 'terra-action-footer/lib/ActionFooter';
import ExampleTemplate from '../../common/ExampleTemplate';

export default () => (
  <ExampleTemplate>
    <ActionFooter
      start={<Hyperlink href="#">Start Action</Hyperlink>}
    />
  </ExampleTemplate>
);
