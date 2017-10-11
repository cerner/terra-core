/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const TableTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/multi-select-table-tests/default">Multi Select Table - Default</Link></li>
      <li><Link to="/tests/multi-select-table-tests/onchange">Multi Select Table - OnChange</Link></li>
      <li><Link to="/tests/multi-select-table-tests/preselected">Multi Select Table - Preselected Row</Link></li>
      <li><Link to="/tests/multi-select-table-tests/non-selectable">Multi Select Table - Non-Selectable Row</Link></li>
      <li><Link to="/tests/multi-select-table-tests/max-count">Multi Select Table - Max Count Specified</Link></li>
      <li><Link to="/tests/multi-select-table-tests/max-count-initially-met">Multi Select Table - Max Count Initially Met</Link></li>
      <li><Link to="/tests/multi-select-table-tests/max-count-initially-exceeded">Multi Select Table - Max Count Initially Exceeded</Link></li>
    </ul>
  </div>
);

export default TableTests;
