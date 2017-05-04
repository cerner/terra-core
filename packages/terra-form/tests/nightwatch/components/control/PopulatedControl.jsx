import React from 'react';

import Control from '../../../../lib/components/Control';

const control = () => (
  <Control
    type="checkbox"
    label="Do you have any Children?"
    name="children_present"
    value="children_present"
    attrs={{ className: 'healtheintent-application' }}
    isInline
  />
);

export default control;
