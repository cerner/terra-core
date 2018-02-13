import React from 'react';

import FormInput from '../../lib/Input';

const DefaultFormInput = () => <FormInput id="form-input-default" />;
const InvalidFormInput = () => <FormInput isInvalid id="form-input-invalid" />;
const DisabledFormInput = () => <FormInput disabled id="form-input-disabled" />;

export {
  DefaultFormInput,
  InvalidFormInput,
  DisabledFormInput,
};
