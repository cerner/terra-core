import React from 'react';

import Field from '../../../lib/Field';

const field = () =>
  <Field
    type="checkbox"
    label="Do you have any Children?"
    name="children_present"
    value="children_present"
    error="This field is required"
    help="Families are eligible for family package plans"
    required
    isInline
  />;

export default field;
