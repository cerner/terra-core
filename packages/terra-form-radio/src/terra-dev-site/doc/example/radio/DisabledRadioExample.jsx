import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Radio from 'terra-form-radio/lib/Radio';

const disabledRadioExample = () => (
  <div>
    <Radio id="disabled-radio" labelText="Disabled Radio" disabled name="disabled" />
    <Radio id="disabled-checked-radio" labelText="Disabled and Checked Radio" defaultChecked disabled name="disabled" />
  </div>
);

export default disabledRadioExample;
