/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const TableTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/table-tests/default">Default Table</Link></li>
      <li><Link to="/tests/table-tests/no-striped">No Striped Table</Link></li>
      <li><Link to="/tests/table-tests/selectable-table">Selectable Table</Link></li>
      <li><Link to="/tests/table-tests/table-highlighted-rows">Highlighted Rows Table</Link></li>
      <li><Link to="/tests/table-tests/table-sort-indicator">Sort Indicator Table Header</Link></li>
    </ul>
  </div>
);

export default TableTests;
