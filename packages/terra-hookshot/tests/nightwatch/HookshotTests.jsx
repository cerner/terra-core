/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const HookshotTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/hookshot-tests/default">Hookshot - Default</Link></li>
      <li><Link to="/tests/hookshot-tests/close-behaviors">Hookshot - Close Behaviors</Link></li>
      <li><Link to="/tests/hookshot-tests/enabled-behaviors">Hookshot - Enabled Behaviors</Link></li>
      <li><Link to="/tests/hookshot-tests/content-offset">Hookshot - Content Offset</Link></li>
      <li><Link to="/tests/hookshot-tests/target-offset">Hookshot - Target Offset</Link></li>
    </ul>
  </div>
);

export default HookshotTests;
