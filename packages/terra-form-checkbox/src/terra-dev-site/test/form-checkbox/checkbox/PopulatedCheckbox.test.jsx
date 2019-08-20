import React from 'react';
import Checkbox from '../../../../Checkbox';

const checkbox = () => (
  <Checkbox
    id="populated"
    labelText="Do you have any Children?"
    labelTextAttrs={{ className: 'healtheintent-control-label-text' }}
    name="children_present"
    value="children_present"
    inputAttrs={{ className: 'healtheintent-application' }}
    isInline
  />
);

export default checkbox;
