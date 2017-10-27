import React from 'react';
import Base from 'terra-base';
import TextField from '../../../lib/TextField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const textField = () => (
  <Base locale={locale}>
    <TextField id="default-text-field" />
  </Base>
);

export default textField;
