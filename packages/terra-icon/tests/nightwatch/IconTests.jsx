/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const IconTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/icon-tests/default">Icon Default</Link></li>
      <li><Link to="/tests/icon-tests/append-class">Icon append css classes</Link></li>
      <li><Link to="/tests/icon-tests/aria">Icon aria attributes</Link></li>
      <li><Link to="/tests/icon-tests/bidi">Icon Bidirectionality</Link></li>
      <li><Link to="/tests/icon-tests/height-width">Icon Height Width</Link></li>
    </ul>
  </div>
);

export default IconTests;
