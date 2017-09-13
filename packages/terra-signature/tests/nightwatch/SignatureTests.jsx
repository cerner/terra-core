/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SignatureTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/signature-tests/default">Default Signature</Link></li>
      <li><Link to="/tests/signature-tests/singleline">Single Line</Link></li>
    </ul>
  </div>
);

export default SignatureTests;
