import React from 'react';
import Button from 'terra-button';
import ActionFooter from 'terra-action-footer/lib/ActionFooter';

export default () => (
  <ActionFooter
    start={(
      <div>
        FakeLink Start Action 1
        <Button text="Start Action 2" />
      </div>
)}
  />
);
