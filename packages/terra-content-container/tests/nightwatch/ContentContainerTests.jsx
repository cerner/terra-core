/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ContentContainerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/content-container-tests/content-container-default">ContentContainer - default</Link></li>
      <li><Link to="/tests/content-container-tests/content-container-fill">ContentContainer - fill</Link></li>
    </ul>
  </div>
);

export default ContentContainerTests;
