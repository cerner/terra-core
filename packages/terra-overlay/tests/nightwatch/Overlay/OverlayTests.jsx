/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const OverlayTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/overlay-tests/default">Overlay- Default</Link></li>
      <li><Link to="/tests/overlay-tests/container">Overlay - Relative to Container</Link></li>
      <li><Link to="/tests/overlay-tests/custom-content">Overlay - Custom Content</Link></li>
      <li><Link to="/tests/overlay-tests/on-request-close">Overlay - On Request Close</Link></li>
      <li><Link to="/tests/overlay-tests/fullscreen-scrollable">Overlay - Fullscreen Scrollable</Link></li>
      <li><Link to="/tests/overlay-tests/container-scrollable">Overlay - Relativeto Container Scrollable</Link></li>
      <li><Link to="/tests/overlay-tests/light-themed">Overlay - Light Themed</Link></li>
      <li><Link to="/tests/overlay-tests/dark-themed">Overlay - Dark Themed</Link></li>
      <li><Link to="/tests/overlay-tests/clear-themed">Overlay - Clear Themed</Link></li>
    </ul>
  </div>
);

export default OverlayTests;
