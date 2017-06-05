/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SingleSelectListTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/single-select-list-tests/default">SingleSelectList - Default</Link></li>
      <li><Link to="/tests/single-select-list-tests/items-divided">SingleSelectList - Divided</Link></li>
      <li><Link to="/tests/single-select-list-tests/chevron">SingleSelectList - Items with Chevron</Link></li>
      <li><Link to="/tests/single-select-list-tests/on-change">SingleSelectList - OnChange Provided</Link></li>
      <li><Link to="/tests/single-select-list-tests/preselected">SingleSelectList - Preselected Item</Link></li>
      <li><Link to="/tests/single-select-list-tests/non-selectable">SingleSelectList - Non-Selectable Item</Link></li>
      <li><Link to="/tests/single-select-list-tests/one-item">SingleSelectList - One Item</Link></li>
      <li><Link to="/tests/single-select-list-tests/no-items">SingleSelectList - No items</Link></li>
    </ul>
  </div>
);

export default SingleSelectListTests;
