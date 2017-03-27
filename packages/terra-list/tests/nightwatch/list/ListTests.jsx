/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ListTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/list-tests/default">Default List</Link></li>
      <li><Link to="/tests/list-tests/items">Items List</Link></li>
      <li><Link to="/tests/list-tests/items-divided">Items Divided List</Link></li>
    </ul>
  </div>
);

export default ListTests;
