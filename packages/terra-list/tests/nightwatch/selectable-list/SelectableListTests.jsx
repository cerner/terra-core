/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SelectableListTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/selectable-list-tests/default">SelectableList - Default</Link></li>
      <li><Link to="/tests/selectable-list-tests/items-divided">SelectableList - Divided</Link></li>
      <li><Link to="/tests/selectable-list-tests/chevron">SelectableList - Items with Chevron</Link></li>
      <li><Link to="/tests/selectable-list-tests/single-chevron">SelectableList - One Items with Chevron</Link></li>
      <li><Link to="/tests/selectable-list-tests/single-non-chevron">SelectableList - Items with Chevron, One Non-Chevron Item</Link></li>
      <li><Link to="/tests/selectable-list-tests/on-change">SelectableList - OnChange Provided</Link></li>
      <li><Link to="/tests/selectable-list-tests/preselected">SelectableList - Preselected Item</Link></li>
      <li><Link to="/tests/selectable-list-tests/non-selectable">SelectableList - Non-Selectable Item</Link></li>
      <li><Link to="/tests/selectable-list-tests/one-item">SelectableList - One Item</Link></li>
      <li><Link to="/tests/selectable-list-tests/no-items">SelectableList - No Items</Link></li>
      <li><Link to="/tests/selectable-list-tests/disabled-on-change">SelectableList - Disable Unselected</Link></li>
    </ul>
  </div>
);

export default SelectableListTests;
