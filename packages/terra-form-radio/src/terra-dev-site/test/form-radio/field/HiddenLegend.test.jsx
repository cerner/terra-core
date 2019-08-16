import React from 'react';
import Radio from '../../../../Radio';
import RadioField from '../../../../RadioField';

const exampleRadioField = () => (
  <RadioField legend="Desired Department" isLegendHidden>
    <Radio id="ux-dept" name="dept" labelText="UX/Interaction Design" value="ux" />
    <Radio id="magazine-dept" name="dept" labelText="Magazine Advertisements" value="magazine" />
    <Radio id="website-dept" name="dept" labelText="Website Advertisements" value="website" />
    <Radio id="events-dept" name="dept" labelText="Event Promotions" value="events" />
  </RadioField>
);

export default exampleRadioField;
