import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Checkbox from 'terra-form-checkbox/lib/Checkbox';

const disabledCheckbox = () => (
  <div>
    <Checkbox id="disabledCheckbox" labelText="Disabled Checkbox" disabled />
    <Checkbox id="disabledcheckedCheckbox" labelText="Disabled and Checked Checkbox" defaultChecked disabled />
  </div>
);

export default disabledCheckbox;
