/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const MultiSelectListTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/multi-select-list-tests/default">Default MultiSelectList</Link></li>
      <li><Link to="/tests/multi-select-list-tests/items">Items MultiSelectList</Link></li>
      <li><Link to="/tests/multi-select-list-tests/items-divided">Items Divided MultiSelectList</Link></li>
      <li><Link to="/tests/multi-select-list-tests/max-count">MaxCount MultiSelectList</Link></li>
      <li><Link to="/tests/multi-select-list-tests/on-change">OnChange MultiSelectList</Link></li>
      <li><Link to="/tests/multi-select-list-tests/max-count-on-change">MaxCount OnChange MultiSelectList</Link></li>
      <li><Link to="/tests/multi-select-list-tests/no-deselect">MultiSelectList With Non-Deselectable Item</Link></li>
    </ul>
  </div>
);

export default MultiSelectListTests;
