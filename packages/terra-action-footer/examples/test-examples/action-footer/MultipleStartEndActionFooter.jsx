import React from 'react';
import Button from '../../../../terra-button/lib/Button';
import ActionFooter from '../../../lib/ActionFooter';

export default () => (
  <ActionFooter
    start={
      <div>
        FakeLink Start Action 1
        <Button text="Start Action 2" />
      </div>
    }
    end={
      <div>
        <Button text="End Action 1" />
        FakeLink End Action 2
        <Button text="End Action 3" />
      </div>
    }
  />
);
