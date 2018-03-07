import React from 'react';
import Button from '../../../../terra-button/lib/Button';
import ActionFooter from '../../../lib/ActionFooter';

export default () => (
  <ActionFooter
    end={
      <div>
        <Button text="End Action 1" />
        FakeLink End Action 2
        <Button text="End Action 3" />
      </div>
    }
  />
);
