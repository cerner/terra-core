import React from 'react';

import Fieldset from '../../../lib/Fieldset';

const fieldset = () => (
  <Fieldset
    legend="Do you have any Children?"
    name="children_present"
    value="children_present"
    error="This field is required"
    help="Families are eligible for family package plans"
    required
    isInline
  />
);

export default fieldset;
