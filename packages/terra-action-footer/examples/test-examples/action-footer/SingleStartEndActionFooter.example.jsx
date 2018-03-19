import React from 'react';
import ActionFooter from '../../../lib/ActionFooter';
import Button from '../../../../terra-button/lib/Button';

export default () => (
  <ActionFooter
    start={<Button text="Start Action" />}
    end="FakeLink End Action"
  />
);
