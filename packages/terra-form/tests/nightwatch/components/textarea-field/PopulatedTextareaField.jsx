import React from 'react';

import TextareaField from '../../../../lib/components/TextareaField';

const textareaField = () => (
  <TextareaField
    label="Profile Description"
    name="profile_description"
    value=""
    error="Name is required"
    help="The name given to you at birth."
    maxLength={15}
    minLength={5}
    required
    attrs={{ autoFocus: true }}
    isInline
  />
);

export default textareaField;
