import React from 'react';
import Button from '../../../../terra-button/lib/Button';
import ActionFooter from '../../../lib/ActionFooter';

export default () => (
  <ActionFooter
    id="action-footer-multiple-end-actions"
    end={
      <div>
        <Button text="End Action 1" />
        <a href="/#/tests/action-footer">End Action 2</a>
        <Button text="End Action 3" />
      </div>
    }
  />
);
