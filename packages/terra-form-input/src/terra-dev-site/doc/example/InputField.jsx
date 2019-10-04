import React from 'react';
import InputField from 'terra-form-input/lib/InputField';

const DefaultInputField = () => (
  <InputField
    inputId="profile-name"
    label="Profile Name"
    help="Note: This can not be changed in the future"
    type="text"
    placeholder="Profile Name"
    inputAttrs={{
      name: 'profile',
    }}
  />
);

export default DefaultInputField;
