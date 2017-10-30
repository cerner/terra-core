/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const PopupTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/popup-tests/default">Popup - Default</Link></li>
      <li><Link to="/tests/popup-tests/overlay">Popup - Overlay</Link></li>
      <li><Link to="/tests/popup-tests/arrow">Popup - With Arrow</Link></li>
      <li><Link to="/tests/popup-tests/class-name">Popup - ClassName</Link></li>
      <li><Link to="/tests/popup-tests/invalid">Popup - Invalid Dimensions</Link></li>
      <li><Link to="/tests/popup-tests/small">Popup - Small</Link></li>
      <li><Link to="/tests/popup-tests/medium">Popup - Medium</Link></li>
      <li><Link to="/tests/popup-tests/large">Popup - Large</Link></li>
      <li><Link to="/tests/popup-tests/automatic-height">Popup - Automatic Height</Link></li>
      <li><Link to="/tests/popup-tests/automatic-width">Popup - Automatic Width</Link></li>
      <li><Link to="/tests/popup-tests/no-header">Popup - No Header</Link></li>
      <li><Link to="/tests/popup-tests/bounded">Popup - Bounded</Link></li>
      <li><Link to="/tests/popup-tests/bounded-height">Popup - Bounded Height</Link></li>
      <li><Link to="/tests/popup-tests/bounded-automatic-height">Popup - Bounded Automatic Height </Link></li>
      <li><Link to="/tests/popup-tests/bounded-width">Popup - Bounded Width</Link></li>
      <li><Link to="/tests/popup-tests/bounded-automatic-width">Popup - Bounded Automatic Width</Link></li>
      <li><Link to="/tests/popup-tests/different-attachment">Popup - Different Content vs Target Attachments for Arrow</Link></li>
      <li><Link to="/tests/popup-tests/horizontal-attachment">Popup - Horizontal Attachments for Arrow</Link></li>
      <li><Link to="/tests/popup-tests/vertical-attachment">Popup - Vertical Attachments for Arrow</Link></li>
      <li><Link to="/tests/popup-tests/vertical-left-offset">Popup - Vertical Left Attachment -- Arrow Adjustment</Link></li>
      <li><Link to="/tests/popup-tests/vertical-left-target-offset">Popup - Vertical Left Attachment -- Target Smaller than Arrow Offset</Link></li>
      <li><Link to="/tests/popup-tests/vertical-right-offset">Popup - Vertical Right Attachment -- Arrow Adjustment</Link></li>
      <li><Link to="/tests/popup-tests/vertical-right-target-offset">Popup - Vertical Right Attachment -- Target Smaller than Arrow Offset</Link></li>
      <li><Link to="/tests/popup-tests/popup-inside-modal">Popup - Popup Inside Modal</Link></li>
      <li><Link to="/tests/popup-tests/resize-content">Popup - Resize Content</Link></li>
    </ul>
  </div>
);

export default PopupTests;
