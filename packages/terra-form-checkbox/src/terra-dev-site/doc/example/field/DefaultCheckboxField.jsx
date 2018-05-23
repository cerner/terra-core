import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Checkbox from 'terra-form-checkbox/lib/Checkbox';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Checkbox from 'terra-form-checkbox/lib/CheckboxField';

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
