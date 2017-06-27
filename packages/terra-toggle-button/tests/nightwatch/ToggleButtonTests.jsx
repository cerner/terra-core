/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ToggleButtonTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/toggle-button-tests/default">ToggleButton - Default</Link></li>
      <li><Link to="/tests/toggle-button-tests/customized-button">ToggleButton - Custom Button</Link></li>
      <li><Link to="/tests/toggle-button-tests/closed-button-text">ToggleButton - Custom Close Button Text</Link></li>
      <li><Link to="/tests/toggle-button-tests/customized-icon">ToggleButton - Custom Icon</Link></li>
      <li><Link to="/tests/toggle-button-tests/animated">ToggleButton - Animated</Link></li>
      <li><Link to="/tests/toggle-button-tests/icon-animated">ToggleButton - Icon Animated</Link></li>
      <li><Link to="/tests/toggle-button-tests/icon-only">ToggleButton - Icon Only</Link></li>
      <li><Link to="/tests/toggle-button-tests/initially-open">ToggleButton - Initially Open</Link></li>
      <li><Link to="/tests/toggle-button-tests/open-button-text">ToggleButton - Custom Open Button Text</Link></li>
      <li><Link to="/tests/toggle-button-tests/on-open-event">ToggleButton - On Open Event</Link></li>
      <li><Link to="/tests/toggle-button-tests/on-close-event">ToggleButton - On Close Event</Link></li>
    </ul>
  </div>
);

export default ToggleButtonTests;
