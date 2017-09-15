/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SlideGroupTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/slide-group-tests/default">SlideGroup - Default</Link></li>
      <li><Link to="/tests/slide-group-tests/one-item">SlideGroup - One Item</Link></li>
      <li><Link to="/tests/slide-group-tests/non-animated">SlideGroup - Non-Animated</Link></li>
      <li><Link to="/tests/slide-group-tests/animated">SlideGroup - Animated</Link></li>
    </ul>
  </div>
);

export default SlideGroupTests;
