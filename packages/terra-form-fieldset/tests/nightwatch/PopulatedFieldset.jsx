import React from 'react';

import Fieldset from '../../lib/Fieldset';

const fieldset = () =>
  <Fieldset
    id="populated-fieldset"
    legend="Do you have any children?"
    legendAttrs={{ className: 'healtheintent-application' }}
    name="children_present"
    value="children_present"
    help="Families are eligible for family package plans"
    required
    isInline
  />;

export default fieldset;
