/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const CollapseTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/collapse-tests/default">Collapse - Default</Link></li>
      <li><Link to="/tests/collapse-tests/customized-button">Collapse - Custom Button</Link></li>
      <li><Link to="/tests/collapse-tests/closed-button-text">Collapse - Custom Close Button Text</Link></li>
      <li><Link to="/tests/collapse-tests/customized-icon">Collapse - Custom Icon</Link></li>
      <li><Link to="/tests/collapse-tests/animated">Collapse - Animated</Link></li>
      <li><Link to="/tests/collapse-tests/initially-open">Collapse - Initially Open</Link></li>
      <li><Link to="/tests/collapse-tests/open-button-text">Collapse - Custom Open Button Text</Link></li>
    </ul>
  </div>
);

export default CollapseTests;
