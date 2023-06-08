import React from 'react';
import InputField from 'terra-form-input/lib/InputField';

const PlaceholderInputField = () => (
  <InputField
    inputId="profile-name"
    label="Profile Name"
    help="Note: This can not be changed in the future"
    type="text"
    inputAttrs={{
      name: 'profile',
      placeholder: 'Enter The Profile Name',
      showMpageFusionPlaceholder: true,
    }}
  />
);

export default PlaceholderInputField;
