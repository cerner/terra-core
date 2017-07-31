import React from 'react';

import Field from '../../../lib/Field';

const field = () =>
  <Field
    id="populated-field"
    type="checkbox"
    label="Do you have any Children?"
    labelAttrs={{ className: 'healtheintent-application' }}
    name="children_present"
    value="children_present"
    error="This field is required"
    help="Families are eligible for family package plans"
    required
    isInline
  />;

export default field;
