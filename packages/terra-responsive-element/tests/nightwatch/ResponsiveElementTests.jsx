/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ResponsiveElementTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/responsive-element-tests/default">Default Parent ResponsiveElement</Link></li>
      <li><Link to="/tests/responsive-element-tests/tiny">Tiny Parent ResponsiveElement</Link></li>
      <li><Link to="/tests/responsive-element-tests/small">Small Parent Default ResponsiveElement</Link></li>
      <li><Link to="/tests/responsive-element-tests/medium">Medium Parent Default ResponsiveElement</Link></li>
      <li><Link to="/tests/responsive-element-tests/large">Large Parent Default ResponsiveElement</Link></li>
      <li><Link to="/tests/responsive-element-tests/huge">Huge Parent Default ResponsiveElement</Link></li>
      <li><Link to="/tests/responsive-element-tests/window-responsive">Window ResponsiveElement</Link></li>
    </ul>
  </div>
);

export default ResponsiveElementTests;
