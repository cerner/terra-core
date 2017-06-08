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
      <li><Link to="/tests/popup-tests/no-header">No Header Popup</Link></li>
      <li><Link to="/tests/popup-tests/small">Small Popup</Link></li>
      <li><Link to="/tests/popup-tests/medium">Medium Popup</Link></li>
      <li><Link to="/tests/popup-tests/large">Large Popup</Link></li>
    </ul>
  </div>
);

export default PopupTests;
