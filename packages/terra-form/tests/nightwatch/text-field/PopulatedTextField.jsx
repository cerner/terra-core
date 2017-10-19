import React from 'react';
import Base from 'terra-base';
import TextField from '../../../lib/TextField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const textField = () => (
  <Base locale={locale}>
    <TextField
      id="populated-text-field"
      label="Associate ID"
      name="associate_id"
      type="text"
      defaultValue=""
      error="Associate ID is required"
      help="This is the ID you were given during orientation"
      maxLength={15}
      required
      inputAttrs={{ className: 'healtheintent-application' }}
      inputId="associate-id"
      isInline
    />
  </Base>
);

export default textField;
