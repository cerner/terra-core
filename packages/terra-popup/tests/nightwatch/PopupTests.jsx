/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const PopupTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/popup-tests/default">Default Popup</Link></li>
      <li><Link to="/tests/popup-tests/arrow">Arrow Popup</Link></li>
      <li><Link to="/tests/popup-tests/class-name">ClassName Popup</Link></li>
      <li><Link to="/tests/popup-tests/bounded">Bounded Popup</Link></li>
      <li><Link to="/tests/popup-tests/bounded-height">Bounded Height Popup</Link></li>
      <li><Link to="/tests/popup-tests/bounded-width">Bounded Width Popup</Link></li>
      <li><Link to="/tests/popup-tests/no-header">No Header Popup</Link></li>
      <li><Link to="/tests/popup-tests/small">Small Popup</Link></li>
      <li><Link to="/tests/popup-tests/medium">Medium Popup</Link></li>
      <li><Link to="/tests/popup-tests/large">Large Popup</Link></li>
      <li><Link to="/tests/popup-tests/top-arrow-offset">Top Arrow Offset Popup</Link></li>
      <li><Link to="/tests/popup-tests/bottom-arrow-offset">Bottom Arrow Offset Popup</Link></li>
      <li><Link to="/tests/popup-tests/left-arrow-offset">Left Arrow Offset Popup</Link></li>
      <li><Link to="/tests/popup-tests/right-arrow-offset">Right Arrow Offset Popup</Link></li>
      <li><Link to="/tests/popup-tests/horizontal-center">Horizontal Center Popup</Link></li>
      <li><Link to="/tests/popup-tests/vertical-left">Vertical Left Popup</Link></li>
      <li><Link to="/tests/popup-tests/vertical-center">Vertical Center Popup</Link></li>
      <li><Link to="/tests/popup-tests/vertical-right">Vertical Right Popup</Link></li>
    </ul>
  </div>
);

export default PopupTests;
