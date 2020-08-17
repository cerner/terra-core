import React from 'react';
import Input from 'terra-form-input';

const DefaultIncompleteExample = () => (
  <div>
    <Input
      name="default incomplete input"
      id="uncontrolled-default-incomplete"
      required
      isIncomplete
    />
  </div>
);

export default DefaultIncompleteExample;
