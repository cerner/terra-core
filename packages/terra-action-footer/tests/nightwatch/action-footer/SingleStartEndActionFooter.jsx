import React from 'react';
import Button from '../../../../terra-button/lib/Button';
import ActionFooter from '../../../lib/ActionFooter';

export default () => (
  <ActionFooter
    id="action-footer-single-start-end-action"
    start={<Button text="Start Action" />}
    end="Fake link"
  />
);
