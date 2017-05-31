/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const BaseTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/base-tests/default">Default Base</Link></li>
      <li><Link to="/tests/base-tests/switch">Switch Locale Base</Link></li>
    </ul>
  </div>
);

export default BaseTests;
