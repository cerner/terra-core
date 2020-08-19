import React from 'react';
import Input from 'terra-form-input';

const InvalidWithIncompleteExample = () => (
  <Input
    name="invalid wins input"
    id="uncontrolled-invalid-with-incomplete"
    required
    isIncomplete
    isInvalid
  />
);

export default InvalidWithIncompleteExample;
