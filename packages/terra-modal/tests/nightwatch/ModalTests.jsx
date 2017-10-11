/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ModalTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/modal-tests/append-class">Modal - Append CSS Class</Link></li>
      <li><Link to="/tests/modal-tests/content-overflow">Modal - Content Overflow</Link></li>
      <li><Link to="/tests/modal-tests/dialog">Modal - Dialog</Link></li>
      <li><Link to="/tests/modal-tests/disable-close-on-esc">Modal - Disabled Close On Esc</Link></li>
      <li><Link to="/tests/modal-tests/disable-close-on-outside-click">Modal - Disabled Close On Outside Click</Link></li>
      <li><Link to="/tests/modal-tests/is-fullscreen">Modal - Fullscreen</Link></li>
      <li><Link to="/tests/modal-tests/is-open">Modal - Default</Link></li>
      <li><Link to="/tests/modal-tests/no-focusable-content">Modal - No Focusable Content</Link></li>
      <li><Link to="/tests/modal-tests/override-role">Modal - Override Role</Link></li>
      <li><Link to="/tests/modal-tests/scrollable-true">Modal - Scrollable Content</Link></li>
      <li><Link to="/tests/modal-tests/scrollable-false">Modal - Non-Scrollable Content</Link></li>
      <li><Link to="/tests/modal-tests/custom-props">Modal - Custom Props</Link></li>
    </ul>
  </div>
);

export default ModalTests;
