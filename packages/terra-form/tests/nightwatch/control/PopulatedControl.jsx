import React from 'react';

import Control from '../../../lib/Control';

const control = () => (
  <Control
    id="populated-control"
    type="checkbox"
    labelText="Do you have any Children?"
    labelTextAttrs={{ className: 'healtheintent-control-label-text' }}
    name="children_present"
    value="children_present"
    inputAttrs={{ className: 'healtheintent-application' }}
    isInline
  />
);

export default control;
