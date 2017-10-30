/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const FormFieldTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/form-field-tests/combinations">Field - Field Combinations</Link></li>
      <li><Link to="/tests/form-field-tests/is-invalid">Field - Interactive Valid State</Link></li>
      <li><Link to="/tests/form-field-tests/inline">Field - Inline</Link></li>
      <li><Link to="/tests/form-field-tests/text-wrap">Field - Text Wrap</Link></li>
    </ul>
  </div>
);

export default FormFieldTests;
