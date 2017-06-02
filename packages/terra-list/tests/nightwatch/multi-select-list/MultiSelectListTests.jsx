/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const MultiSelectListTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/multi-select-list-tests/default">MultiSelectList - Default</Link></li>
      <li><Link to="/tests/multi-select-list-tests/items-divided">MultiSelectList - Divided</Link></li>
      <li><Link to="/tests/multi-select-list-tests/on-change">MultiSelectList - OnChange Provided</Link></li>
      <li><Link to="/tests/multi-select-list-tests/preselected">MultiSelectList - Preselected Item</Link></li>
      <li><Link to="/tests/multi-select-list-tests/non-selectable">MultiSelectList - Non-Selectable Item</Link></li>
      <li><Link to="/tests/multi-select-list-tests/no-deselect">MultiSelectList - Non-Deselectable Item</Link></li>
      <li><Link to="/tests/multi-select-list-tests/max-count">MultiSelectList - MaxCount of 2</Link></li>
      <li><Link to="/tests/multi-select-list-tests/max-count-on-change">MultiSelectList - MaxCount of 2 and OnChange Provided</Link></li>
      <li><Link to="/tests/multi-select-list-tests/one-item">MultiSelectList - One Item</Link></li>
      <li><Link to="/tests/multi-select-list-tests/no-items">MultiSelectList - No Items</Link></li>

    </ul>
  </div>
);

export default MultiSelectListTests;
