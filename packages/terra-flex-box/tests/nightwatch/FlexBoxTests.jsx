/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const BaseTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/flexbox-tests/default">FlexBox Default</Link></li>
      <li><Link to="/tests/flexbox-tests/parent">FlexBox Parent</Link></li>
      <li><Link to="/tests/flexbox-tests/child">FlexBox Child</Link></li>
      <li><Link to="/tests/flexbox-tests/minmax">FlexBox Min Max Sizing</Link></li>
      <li><Link to="/tests/flexbox-tests/shorthand">FlexBox Shorthand Syntax</Link></li>
    </ul>
  </div>
);

export default BaseTests;
