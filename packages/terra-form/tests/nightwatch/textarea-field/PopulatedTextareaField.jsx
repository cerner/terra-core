import React from 'react';
import Base from 'terra-base';
import TextareaField from '../../../lib/TextareaField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const textareaField = () => (
  <Base locale={locale}>
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
    />
  </Base>
);

export default textareaField;
