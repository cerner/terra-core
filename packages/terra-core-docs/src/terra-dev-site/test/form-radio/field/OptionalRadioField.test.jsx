import React from 'react';
import Radio, { RadioField } from 'terra-form-radio';

const exampleRadioField = () => (
  <RadioField legend="Desired Department" showOptional>
    <Radio id="ux-dept" name="dept[]" labelText="UX/Interaction Design" value="ux" />
    <Radio id="magazine-dept" name="dept[]" labelText="Magazine Advertisements" value="magazine" />
    <Radio id="website-dept" name="dept[]" labelText="Website Advertisements" value="website" />
    <Radio id="events-dept" name="dept[]" labelText="Event Promotions" value="events" />
  </RadioField>
);

export default exampleRadioField;
