import React from 'react';

import Input from '../../lib/Input';

const DefaultInput = () => <Input aria-label="default form input" id="form-input-default" />;
const InvalidInput = () => <Input aria-label="invalid form input" isInvalid id="form-input-invalid" />;
const DisabledInput = () => <Input aria-label="disabled form input" disabled id="form-input-disabled" />;
const OnChangeInput = () => <Input aria-label="onChange testable form input" onChange={() => {}} id="form-input-onChange" />;
const OnBlurInput = () => <Input aria-label="onBlur testable form input" onBlur={() => {}} id="form-input-onBlur" />;
const OnFocusInput = () => <Input aria-label="onFocus testable form input" onFocus={() => {}} id="form-input-onFocus" />;
const RequiredInput = () => <Input aria-label="Required testable form input" required id="form-input-required" />;
const FocussedInput = () => <Input style={{ caretColor: 'transparent' }} aria-label="Focussed form input" required id="form-input-focussed-input" />;

export {
  DefaultInput,
  InvalidInput,
  DisabledInput,
  OnChangeInput,
  OnBlurInput,
  OnFocusInput,
  RequiredInput,
  FocussedInput,
};
