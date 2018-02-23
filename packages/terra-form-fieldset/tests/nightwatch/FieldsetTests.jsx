/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const FieldsetTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/form-tests/field/populated">Populated Field</Link></li>
      <li><Link to="/tests/form-tests/fieldset/default">Default Fieldset</Link></li>
    </ul>
  </div>
);

export default FieldsetTests;
