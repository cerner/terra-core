import React from 'react';

import TextField from '../../../lib/TextField';

const textField = () =>
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
  />;

export default textField;
