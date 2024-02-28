import React from 'react';
import InputField from 'terra-form-input/lib/InputField';

const DefaultInputField = () => (
  <InputField
    inputId="profile-name"
    label="Profile Name"
    help="Note: This can not be changed in the future"
    isInvalid={true}
    error="Please enter valid name"
    type="text"
    inputAttrs={{
      name: 'profile',
    }}
  />
);

export default DefaultInputField;
