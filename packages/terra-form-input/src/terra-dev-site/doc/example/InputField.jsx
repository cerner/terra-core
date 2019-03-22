import React from 'react';
import InputField from '../../../InputField';

const DefaultInputField = () => (
  <InputField
    inputId="profile-name"
    label="Profile Name"
    help="Note: This can not be changed in the future"
    inputAttrs={{
      placeholder: 'Profile Name',
      name: 'profile',
      type: 'text',
    }}
  />
);

export default DefaultInputField;
