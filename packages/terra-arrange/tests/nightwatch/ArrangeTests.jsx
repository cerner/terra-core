/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const BaseTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/arrange-tests/aligned-all-arrange">Aligned Arrange with FitStart, Fill, and FitEnd</Link></li>
      <li><Link to="/tests/arrange-tests/aligned-all-arrange-fit-end-fill">Aligned Arrange with FitEnd and Fill</Link></li>
      <li><Link to="/tests/arrange-tests/aligned-all-arrange-fit-start-fill">Aligned Arrange with FitStart and Fill</Link></li>
      <li><Link to="/tests/arrange-tests/aligned-individually-fit-start">Individually Aligned FitStart</Link></li>
      <li><Link to="/tests/arrange-tests/aligned-individually-fill">Individually Aligned Fill</Link></li>
      <li><Link to="/tests/arrange-tests/aligned-individually-fit-end">Individually Aligned FitEnd</Link></li>
    </ul>
  </div>
);

export default BaseTests;
