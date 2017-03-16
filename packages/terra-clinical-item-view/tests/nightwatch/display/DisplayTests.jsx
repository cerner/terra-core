/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const DisplayTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/clinical-item-view-display-tests/default">Default Display</Link></li>
      <li><Link to="/tests/clinical-item-view-display-tests/text-style">TextStyle Display</Link></li>
      <li><Link to="/tests/clinical-item-view-display-tests/icon">Icon Display</Link></li>
    </ul>
  </div>
);

export default DisplayTests;
