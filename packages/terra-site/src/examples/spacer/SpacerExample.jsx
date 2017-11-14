/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Spacer from 'terra-spacer';
import Button from 'terra-button';

const SpacerExample = () => (
  <div>
    <Spacer marginBottom="medium">
      <Button text="Default" />
    </Spacer>
    <Button text="Primary" variant="primary" />
  </div>
);

export default SpacerExample;
