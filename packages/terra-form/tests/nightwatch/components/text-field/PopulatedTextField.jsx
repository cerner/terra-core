import React from 'react';

import TextField from '../../../../lib/components/TextField';

const textField = () => (
  <TextField
    label="Name"
    name="name"
    value="Mike"
    error="Name is required"
    help="The name given to you at birth."
    maxLength={15}
    required
    attrs={{ autoFocus: true }}
    isInline
  />
);

export default textField;
