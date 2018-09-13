import React from 'react';
import Button from 'terra-button';
import ActionFooter from '../../../ActionFooter';

export default () => (
  <ActionFooter
    start={(
      <div>
        Start Text
        <Button text="Start Action" />
      </div>
)}
    end={(
      <div>
        End Text
        <Button text="End Action" />
      </div>
)}
  />
);
