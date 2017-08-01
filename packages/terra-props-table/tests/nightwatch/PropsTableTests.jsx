/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const PropsTableTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/props-table-tests/default">Mock PropsTable</Link></li>
      <li><Link to="/tests/props-table-tests/title">Mock PropsTable with Title</Link></li>
    </ul>
  </div>
);

export default PropsTableTests;
