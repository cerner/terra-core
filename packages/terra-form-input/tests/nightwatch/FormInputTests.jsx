/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const FormInputTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/form-input-tests/default">Default</Link></li>
      <li><Link to="/tests/form-input-tests/invalid">Invalid</Link></li>
      <li><Link to="/tests/form-input-tests/disabled">Disabled</Link></li>
    </ul>
  </div>
);

export default FormInputTests;
