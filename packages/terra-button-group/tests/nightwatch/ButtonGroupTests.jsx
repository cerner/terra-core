/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ButtonGroupTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/button-group-tests/default-button-group">ButtonGroup - Default Empty</Link></li>
      <li><Link to="/tests/button-group-tests/tiny-button-group">Button Group - Tiny</Link></li>
      <li><Link to="/tests/button-group-tests/small-button-group">Button Group - Small</Link></li>
      <li><Link to="/tests/button-group-tests/medium-button-group">Button Group - Medium</Link></li>
      <li><Link to="/tests/button-group-tests/large-button-group">Button Group - Large</Link></li>
      <li><Link to="/tests/button-group-tests/huge-button-group">Button Group - Huge</Link></li>
      <li><Link to="/tests/button-group-tests/compact-button-group">Button Group - Compact</Link></li>
      <li><Link to="/tests/button-group-tests/icon-default-button-group">Button Group - Icon Default</Link></li>
      <li><Link to="/tests/button-group-tests/icon-reversed-button-group">Button Group - Icon Reversed</Link></li>
      <li><Link to="/tests/button-group-tests/icon-only-button-group">Button Group - Icon Only</Link></li>
      <li><Link to="/tests/button-group-tests/default-variant-button-group">Button Group - Default Variant</Link></li>
      <li><Link to="/tests/button-group-tests/secondary-variant-button-group">Button Group - Secondary Variant</Link></li>
      <li><Link to="/tests/button-group-tests/selectable-button-group">Button Group - Selectable</Link></li>
      <li><Link to="/tests/button-group-tests/on-change-button-group">Button Group - OnChange Provided</Link></li>
    </ul>
  </div>
);

export default ButtonGroupTests;
