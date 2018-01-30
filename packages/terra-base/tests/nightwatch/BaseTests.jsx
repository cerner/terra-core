/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const BaseTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/base-tests/default">Default Base</Link></li>
      <li><Link to="/tests/base-tests/switch">Switch Locale Base</Link></li>
      <li><Link to="/tests/base-tests/no-translations-loaded">No Translations Loaded Component Base</Link></li>
      <li><Link to="/tests/base-tests/no-translations-loaded-string">No Translations Loaded String Base</Link></li>
      <li><Link to="/tests/base-tests/anchors">Anchors</Link></li>
    </ul>
  </div>
);

export default BaseTests;
