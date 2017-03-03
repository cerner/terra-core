/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SingleSelectListTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/single-select-list-tests/default">Default SingleSelectList</Link></li>
      <li><Link to="/tests/single-select-list-tests/items">Items SingleSelectList</Link></li>
      <li><Link to="/tests/single-select-list-tests/items-divided">Items Divided SingleSelectList</Link></li>
      <li><Link to="/tests/single-select-list-tests/chevron">Chevron SingleSelectList</Link></li>
      <li><Link to="/tests/single-select-list-tests/on-change">OnChange SingleSelectList</Link></li>
    </ul>
  </div>
);

export default SingleSelectListTests;
