/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const TableTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/table-tests/default">Table - Default</Link></li>
      <li><Link to="/tests/table-tests/no-striped">Table - No Stripes</Link></li>
      <li><Link to="/tests/table-tests/no-padding">Table - No Padding</Link></li>
      <li><Link to="/tests/table-tests/single-row-table">Table - Single Row</Link></li>
      <li><Link to="/tests/table-tests/table-no-rows">Table - No Rows</Link></li>
      <li><Link to="/tests/table-tests/table-highlighted-rows">Table - Highlighted Rows</Link></li>
      <li><Link to="/tests/table-tests/table-sort-indicator">Table - Sort Indicator on Header</Link></li>
      <li><Link to="/tests/table-tests/selectable-table">Selectable Table - Default</Link></li>
      <li><Link to="/tests/table-tests/selectable-table-single-row">Selectable Table - Single Row</Link></li>
      <li><Link to="/tests/table-tests/selectable-table-no-rows">Selectable Table - No Rows</Link></li>
      <li><Link to="/tests/table-tests/selectable-table-onchange">Selectable Table - OnChange</Link></li>
      <li><Link to="/tests/table-tests/table-subheaders">Table - Subheaders</Link></li>
      <li><Link to="/tests/table-tests/table-selectable-subheaders">Selectable Table - Subheaders</Link></li>
    </ul>
  </div>
);

export default TableTests;
