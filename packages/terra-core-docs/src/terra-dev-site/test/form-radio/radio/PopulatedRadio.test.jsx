import React from 'react';
import Radio from 'terra-form-radio';

const radio = () => (
  <Radio
    id="populated"
    labelText="Do you have any Children?"
    labelTextAttrs={{ className: 'healtheintent-control-label-text' }}
    name="children-present"
    value="children-present"
    inputAttrs={{ className: 'healtheintent-application' }}
    isInline
  />
);

export default radio;
