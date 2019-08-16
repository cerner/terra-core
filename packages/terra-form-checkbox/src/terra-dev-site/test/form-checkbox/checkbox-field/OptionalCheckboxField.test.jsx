import React from 'react';
import Checkbox from '../../../../Checkbox';
import CheckboxField from '../../../../CheckboxField';

const checkboxField = () => (
  <CheckboxField legend="Desired Department" showOptional>
    <Checkbox id="ux-dept" name="dept[]" labelText="UX/Interaction Design" value="ux" />
    <Checkbox id="magazine-dept" name="dept[]" labelText="Magazine Advertisements" value="magazine" />
    <Checkbox id="website-dept" name="dept[]" labelText="Website Advertisements" value="website" />
    <Checkbox id="events-dept" name="dept[]" labelText="Event Promotions" value="events" />
  </CheckboxField>
);

export default checkboxField;
