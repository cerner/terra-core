import React from 'react';

import FormInput from '../../lib/Input';

const DefaultFormInput = () => <FormInput aria-label="default form input" id="form-input-default" />;
const InvalidFormInput = () => <FormInput aria-label="invalid form input" isInvalid id="form-input-invalid" />;
const DisabledFormInput = () => <FormInput aria-label="disabled form input" disabled id="form-input-disabled" />;

export {
  DefaultFormInput,
  InvalidFormInput,
  DisabledFormInput,
};
