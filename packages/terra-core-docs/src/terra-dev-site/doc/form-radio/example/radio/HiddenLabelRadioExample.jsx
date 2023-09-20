import React from 'react';
import Radio from 'terra-form-radio';

const hiddenLabelRadioExample = () => (
  <div>
    <p>
      <b>Note: </b>
      Radio button should always have label to ensures that people with visual or cognitive disabilities will recognize radio buttons and understand what information to provide to fill in the fields.
      <br />
      For example: When we have radio fields for selection of account types, authors may feel that just providing programmatically determined names of the fields will be sufficient to identify them. However, even if all the fields have programmatically determined names, a text label must also identify the set of fields as a account type.
    </p>
    <Radio id="hidden-radio" labelText="can you see me?" isLabelHidden />
  </div>
);

export default hiddenLabelRadioExample;
