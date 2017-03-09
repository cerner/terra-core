/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const CompactCardTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/compact-card-tests/default">Default CompactCard</Link></li>
      <li><Link to="/tests/compact-card-tests/displays">Displays CompactCard</Link></li>
      <li><Link to="/tests/compact-card-tests/accessory">Accessory CompactCard</Link></li>
      <li><Link to="/tests/compact-card-tests/comment">Comment CompactCard</Link></li>
    </ul>
  </div>
);

export default CompactCardTests;
