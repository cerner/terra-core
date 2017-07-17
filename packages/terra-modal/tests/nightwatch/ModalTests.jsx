/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ModalTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/modal-tests/append-class">Append CSS Class</Link></li>
      <li><Link to="/tests/modal-tests/content-overflow">Content Overflow</Link></li>
      <li><Link to="/tests/modal-tests/dialog">Dialog Example</Link></li>
      <li><Link to="/tests/modal-tests/disable-close-on-esc">Disable Close On Esc</Link></li>
      <li><Link to="/tests/modal-tests/disable-close-on-outside-click">Disable Close On Outside Click</Link></li>
      <li><Link to="/tests/modal-tests/is-fullscreen">Fullscreen</Link></li>
      <li><Link to="/tests/modal-tests/is-open">Using isOpen prop</Link></li>
      <li><Link to="/tests/modal-tests/no-focusable-content">No Focusable Content</Link></li>
      <li><Link to="/tests/modal-tests/override-role">Override Role</Link></li>
      <li><Link to="/tests/modal-tests/scrollable-true">Scrollable True</Link></li>
      <li><Link to="/tests/modal-tests/scrollable-false">Scrollable False</Link></li>
      <li><Link to="/tests/modal-tests/custom-props">Custom Props</Link></li>
    </ul>
  </div>
);

export default ModalTests;
