/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const TableTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/table-tests/default">Table - Default</Link></li>
      <li><Link to="/tests/table-tests/no-striped">Table - No Stripes</Link></li>
      <li><Link to="/tests/table-tests/no-padding">Table - No Padding</Link></li>
      <li><Link to="/tests/table-tests/single-row">Table - Single Row</Link></li>
      <li><Link to="/tests/table-tests/no-rows">Table - No Rows</Link></li>
      <li><Link to="/tests/table-tests/highlighted-rows">Table - Highlighted Rows</Link></li>
      <li><Link to="/tests/table-tests/sort-indicator">Table - Sort Indicator on Header</Link></li>
      <li><Link to="/tests/table-tests/subheaders">Table - Subheaders</Link></li>
    </ul>
  </div>
);

export default TableTests;
