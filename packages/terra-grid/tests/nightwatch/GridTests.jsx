/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const GridTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/grid-tests/default">Default Grid</Link></li>
      <li><Link to="/tests/grid-tests/nested">Nested Grid</Link></li>
      <li><Link to="/tests/grid-tests/responsive">Responsive Grid</Link></li>
    </ul>
  </div>
);

export default GridTests;
