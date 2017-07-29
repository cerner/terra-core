/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SlidePanelTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/slide-panel-tests/default">SlidePanel - Default</Link></li>
      <li><Link to="/tests/slide-panel-tests/behavior-overlay">SlidePanel - Behavior: Overlay</Link></li>
      <li><Link to="/tests/slide-panel-tests/behavior-squish">SlidePanel - Behavior: Squish</Link></li>
      <li><Link to="/tests/slide-panel-tests/position-start">SlidePanel - Position: Start</Link></li>
      <li><Link to="/tests/slide-panel-tests/position-end">SlidePanel - Position: End</Link></li>
      <li><Link to="/tests/slide-panel-tests/size-small">SlidePanel - Size: Small</Link></li>
      <li><Link to="/tests/slide-panel-tests/size-large">SlidePanel - Size: Large</Link></li>
      <li><Link to="/tests/slide-panel-tests/open">SlidePanel - Open</Link></li>
      <li><Link to="/tests/slide-panel-tests/fill">SlidePanel - Fill</Link></li>
      <li><Link to="/tests/slide-panel-tests/fullscreen">SlidePanel - Fullscreen</Link></li>
    </ul>
  </div>
);

export default SlidePanelTests;
