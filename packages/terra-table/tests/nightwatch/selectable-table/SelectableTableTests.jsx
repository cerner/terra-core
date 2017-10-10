/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const TableTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/selectable-table-tests/default">SelectableTableRows - Default</Link></li>
      <li><Link to="/tests/selectable-table-tests/subheaders">SelectableTableRows - Subheaders</Link></li>
      <li><Link to="/tests/selectable-table-tests/preselected">SelectableTableRows - Preselected Rows</Link></li>
      <li><Link to="/tests/selectable-table-tests/non-selectable">SelectableTableRows - Non-Selectable Rows</Link></li>
      <li><Link to="/tests/selectable-table-tests/onchange">SelectableTableRows - OnChange</Link></li>
      <li><Link to="/tests/selectable-table-tests/single-row">SelectableTableRows - Single Row</Link></li>
      <li><Link to="/tests/selectable-table-tests/no-rows">SelectableTableRows - No Rows</Link></li>
      <li><Link to="/tests/selectable-table-tests/non-selected-disabled">SelectableTableRows - Non-Selected Rows Disabled</Link></li>
    </ul>
  </div>
);

export default TableTests;
