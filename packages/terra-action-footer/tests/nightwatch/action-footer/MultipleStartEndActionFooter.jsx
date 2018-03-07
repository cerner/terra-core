import React from 'react';
import Button from '../../../../terra-button/lib/Button';
import ActionFooter from '../../../lib/ActionFooter';

export default () => (
  <ActionFooter
    id="action-footer-multiple-start-end-actions"
    start={
      <div>
        Fake link 1
        <Button text="Start Action 2" />
      </div>
    }
    end={
      <div>
        <Button text="End Action 1" />
        Fake link 2
        <Button text="End Action 3" />
      </div>
    }
  />
);
