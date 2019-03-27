import React from 'react';
import TextareaField from '../../../TextareaField';

const DefaultTextAreaField = () => (
  <TextareaField
    inputId="profile-description"
    label="Profile Description"
    help="Every Profile Needs a Description"
    inputAttrs={{
      name: 'description',
      placeholder: 'Enter a profile Description',
    }}
  />
);

export default DefaultTextAreaField;
