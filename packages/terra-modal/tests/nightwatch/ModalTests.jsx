/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ModalTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/modal-tests/is-open">isOpen</Link></li>
      <li><Link to="/tests/modal-tests/open-by-click-on">openByClickOn</Link></li>
      <li><Link to="/tests/modal-tests/disable-close-on-esc">disableCloseOnEsc</Link></li>
      <li><Link to="/tests/modal-tests/disable-close-on-outside-click">disableCloseOnOutsideClick</Link></li>
      <li><Link to="/tests/modal-tests/is-fullscreen">isFullscreen</Link></li>
    </ul>
  </div>
);

export default ModalTests;


