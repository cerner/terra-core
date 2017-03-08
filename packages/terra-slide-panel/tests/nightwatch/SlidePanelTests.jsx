/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SlidePanelTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/slide-panel-tests/default">SlidePanel - Default</Link></li>
      <li><Link to="/tests/slide-panel-tests/behavior-overlay">SlidePanel - Behavior(overlay)</Link></li>
      <li><Link to="/tests/slide-panel-tests/behavior-squish">SlidePanel - Behavior(squish)</Link></li>
      <li><Link to="/tests/slide-panel-tests/position-start">SlidePanel - Position(start)</Link></li>
      <li><Link to="/tests/slide-panel-tests/position-end">SlidePanel - Position(end)</Link></li>
      <li><Link to="/tests/slide-panel-tests/size-small">SlidePanel - Size(small)</Link></li>
      <li><Link to="/tests/slide-panel-tests/size-large">SlidePanel - Size(large)</Link></li>
      <li><Link to="/tests/slide-panel-tests/open">SlidePanel - Open</Link></li>
      <li><Link to="/tests/slide-panel-tests/fill">SlidePanel - Fill</Link></li>
      <li><Link to="/tests/slide-panel-tests/fullscreen">SlidePanel - Fullscreen</Link></li>
    </ul>
  </div>
);

export default SlidePanelTests;
