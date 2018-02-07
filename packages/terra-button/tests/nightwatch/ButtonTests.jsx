/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ButtonTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/button-tests/neutral">Neutral Button</Link></li>
      <li><Link to="/tests/button-tests/icon-neutral">Icon Neutral Button</Link></li>
      <li><Link to="/tests/button-tests/icon-only">Icon Only Button</Link></li>
      <li><Link to="/tests/button-tests/icon-reversed">Icon Reversed Button</Link></li>
      <li><Link to="/tests/button-tests/emphasis">Emphasis Button</Link></li>
      <li><Link to="/tests/button-tests/de-emphasis">De-emphasis Button</Link></li>
      <li><Link to="/tests/button-tests/action">Action Button</Link></li>
      <li><Link to="/tests/button-tests/utility">Utility Button</Link></li>
      <li><Link to="/tests/button-tests/compact">Compact Button</Link></li>
      <li><Link to="/tests/button-tests/block">Long Text Block Button</Link></li>
      <li><Link to="/tests/button-tests/long-text">Long Text Button</Link></li>
      <li><Link to="/tests/button-tests/active-styles">Active Button Styles</Link></li>
      <li><Link to="/tests/button-tests/with-type-button">Button with Type Button</Link></li>
      <li><Link to="/tests/button-tests/with-type-reset">Button with Type Reset</Link></li>
      <li><Link to="/tests/button-tests/with-type-submit">Button with Type Submit</Link></li>
    </ul>
  </div>
);

export default ButtonTests;
