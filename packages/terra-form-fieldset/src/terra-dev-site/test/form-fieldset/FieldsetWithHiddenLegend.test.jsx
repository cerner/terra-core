import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';
import Fieldset from '../../../Fieldset';

const fieldsetwithhiddenlegend = () => (
  <Fieldset
    legend="I am the Hidden Legend"
    help="Families are eligible for family package plans"
    required
    isLegendHidden
  >
    <Field label="First" isInline required htmlFor="first">
      <Input id="first" type="text" name="first" defaultValue="" ariaLabel="first-label" />
    </Field>
    <Field label="Middle" isInline required htmlFor="middle">
      <Input id="middle" type="text" name="middle" defaultValue="" ariaLabel="middle-label" />
    </Field>
    <Field label="Last" isInline required htmlFor="last">
      <Input id="last" type="text" name="last" defaultValue="" ariaLabel="last-label" />
    </Field>
  </Fieldset>
);

export default fieldsetwithhiddenlegend;
