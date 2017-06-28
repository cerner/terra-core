/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ButtonTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/button-tests/default">Default Button</Link></li>
      <li><Link to="/tests/button-tests/disabled">Disabled Button</Link></li>
      <li><Link to="/tests/button-tests/disabled-link">Disabled Link</Link></li>
      <li><Link to="/tests/button-tests/icon-default">Icon Default Button</Link></li>
      <li><Link to="/tests/button-tests/icon-only">Icon Only Button</Link></li>
      <li><Link to="/tests/button-tests/icon-reversed">Icon Reversed Button</Link></li>
      <li><Link to="/tests/button-tests/primary">Primary Button</Link></li>
      <li><Link to="/tests/button-tests/secondary">Secondary Button</Link></li>
      <li><Link to="/tests/button-tests/long-text">Long Text Button</Link></li>
      <li><Link to="/tests/button-tests/huge">Huge Button</Link></li>
      <li><Link to="/tests/button-tests/large">Large Button</Link></li>
      <li><Link to="/tests/button-tests/medium">Medium Button</Link></li>
      <li><Link to="/tests/button-tests/small">Small Button</Link></li>
      <li><Link to="/tests/button-tests/tiny">Tiny Button</Link></li>
      <li><Link to="/tests/button-tests/with-type-button">Button with Type Button</Link></li>
      <li><Link to="/tests/button-tests/with-type-reset">Button with Type Reset</Link></li>
      <li><Link to="/tests/button-tests/with-type-submit">Button with Type Submit</Link></li>
      <li><Link to="/tests/button-tests/link">Link</Link></li>
      <li><Link to="/tests/button-tests/compact">Compact</Link></li>
    </ul>
  </div>
);

export default ButtonTests;
