import React from 'react';

import TextareaField from '../../../lib/TextareaField';

const textareaField = () =>
  <TextareaField
    id="populated-textarea-field"
    label="Profile Description"
    name="profile_description"
    defaultValue="Hello! I'm a Software engineer!"
    error="Profile Description is required"
    help="This is what will be seen on your main page"
    maxLength={15}
    minLength={5}
    inputAttrs={{ className: 'cerner-textarea' }}
    inputId="description"
    isInline
    required
  />;

export default textareaField;
