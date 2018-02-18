import React from 'react';

import Input from '../../lib/Input';

const DefaultInput = () => <Input aria-label="default form input" id="form-input-default" />;
const InvalidInput = () => <Input aria-label="invalid form input" isInvalid id="form-input-invalid" />;
const DisabledInput = () => <Input aria-label="disabled form input" disabled id="form-input-disabled" />;

export {
  DefaultInput,
  InvalidInput,
  DisabledInput,
};
