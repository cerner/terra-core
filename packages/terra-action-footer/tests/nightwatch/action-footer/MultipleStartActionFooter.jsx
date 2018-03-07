import React from 'react';
import Button from '../../../../terra-button/lib/Button';
import ActionFooter from '../../../lib/ActionFooter';

export default () => (
  <ActionFooter
    id="action-footer-multiple-start-actions"
    start={
      <div>
        Fake Link
        <Button text="Start Action 2" />
      </div>
    }
  />
);
