/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ListTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/list-tests/default">List - Default</Link></li>
      <li><Link to="/tests/list-tests/items-divided">List - Divided</Link></li>
      <li><Link to="/tests/list-tests/one-item">List - One Item</Link></li>
      <li><Link to="/tests/list-tests/no-items">List - No Items</Link></li>
    </ul>
  </div>
);

export default ListTests;
