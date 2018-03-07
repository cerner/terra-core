import React from 'react';
import Button from '../../../../terra-button/lib/Button';
import ActionFooter from '../../../lib/ActionFooter';

export default () => (
  <ActionFooter
    start={<Button text="Start Action" />}
    end="FakeLink End Action"
  />
);
