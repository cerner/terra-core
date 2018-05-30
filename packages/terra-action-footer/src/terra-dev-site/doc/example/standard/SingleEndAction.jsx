import React from 'react';
import Button from 'terra-button';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ActionFooter from 'terra-action-footer/lib/ActionFooter';
import ExampleTemplate from '../../common/ExampleTemplate';

export default () => (
  <ExampleTemplate>
    <ActionFooter
      end={<Button text="End Action" />}
    />
  </ExampleTemplate>
);
