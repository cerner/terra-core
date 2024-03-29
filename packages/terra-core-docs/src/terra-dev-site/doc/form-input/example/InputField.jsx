import React from 'react';
import { InputField } from 'terra-form-input';

const DefaultInputField = () => (
  <InputField
    inputId="profile-name"
    label="Profile Name"
    help="Note: This can not be changed in the future"
    type="text"
    inputAttrs={{
      name: 'profile',
    }}
  />
);

export default DefaultInputField;
