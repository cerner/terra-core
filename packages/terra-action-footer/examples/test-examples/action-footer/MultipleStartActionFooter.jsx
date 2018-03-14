import React from 'react';
import ActionFooter from '../../../lib/ActionFooter';
import Button from '../../../../terra-button/lib/Button';


export default () => (
  <ActionFooter
    start={
      <div>
        FakeLink Start Action 1
        <Button text="Start Action 2" />
      </div>
    }
  />
);
