/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const DetailViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/detail-view-tests/detail-view-divided">DetailView - Divided</Link></li>
      <li><Link to="/tests/detail-view-tests/detail-view-no-divider">DetailView - No Divider</Link></li>
    </ul>
  </div>
);

export default DetailViewTests;
