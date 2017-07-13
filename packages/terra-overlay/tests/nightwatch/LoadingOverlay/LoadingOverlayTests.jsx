/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const OverlayTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/loading-overlay-tests/default">LoadingOverlay - Default Fullscreen</Link></li>
      <li><Link to="/tests/loading-overlay-tests/container">LoadingOverlay - Relative to Container</Link></li>
      <li><Link to="/tests/loading-overlay-tests/custom-message">LoadingOverlay - Custom Loading Message</Link></li>
      <li><Link to="/tests/loading-overlay-tests/animated">LoadingOverlay - Animated Icon</Link></li>
      <li><Link to="/tests/loading-overlay-tests/light-themed">LoadingOverlay - Light Themed</Link></li>
      <li><Link to="/tests/loading-overlay-tests/dark-themed">LoadingOverlay - Dark Themed</Link></li>
      <li><Link to="/tests/loading-overlay-tests/clear-themed">LoadingOverlay - Clear Themed</Link></li>
    </ul>
  </div>
);

export default OverlayTests;
