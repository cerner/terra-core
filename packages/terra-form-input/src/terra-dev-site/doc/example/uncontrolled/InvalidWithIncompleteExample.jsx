import React from 'react';
import Input from 'terra-form-input';

const InvalidWithIncompleteExample = () => (
  <div>
    <Input
      name="invalid wins input"
      id="uncontrolled-invalid-with-incomplete"
      required
      isIncomplete
      isInvalid
    />
  </div>
);

export default InvalidWithIncompleteExample;
