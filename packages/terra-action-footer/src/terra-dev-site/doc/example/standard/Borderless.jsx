import React from 'react';
import Button from 'terra-button';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ActionFooter from '../../../../../src/ActionFooter';
import ExampleTemplate from '../../common/ExampleTemplate';

export default () => (
  <ExampleTemplate>
    <ActionFooter
      isBorderless
      start={<a href="/#/site/action-footer">Start Action</a>}
      end={<Button text="End Action" />}
    />
  </ExampleTemplate>
);
