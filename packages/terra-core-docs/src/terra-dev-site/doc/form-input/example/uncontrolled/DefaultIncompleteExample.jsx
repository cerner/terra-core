import React from 'react';
import Input from 'terra-form-input';

const DefaultIncompleteExample = () => (
  <Input
    name="default incomplete input"
    id="uncontrolled-default-incomplete"
    required
    isIncomplete
  />
);

export default DefaultIncompleteExample;
