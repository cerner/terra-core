import React from 'react';

import Checkbox from 'terra-form-checkbox/lib/Checkbox';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';

const disabledCheckbox = () => (
  <CheckboxField
    legend="Do you have experience with any of the following?"
  >
    <Checkbox id="experience-indesign" name="experience[]" labelText="InDesign" />
    <Checkbox id="experience-photoshop" name="experience[]" labelText="Photoshop" />
    <Checkbox id="experience-illustrator" name="experience[]" labelText="Illustrator" />
  </CheckboxField>
);

export default disabledCheckbox;
