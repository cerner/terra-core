/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ButtonGroupTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/button-group-tests/default-button-group">Default Empty ButtonGroup</Link></li>
      <li><Link to="/tests/button-group-tests/tiny-button-group">Tiny Button Group</Link></li>
      <li><Link to="/tests/button-group-tests/small-button-group">Small Button Group</Link></li>
      <li><Link to="/tests/button-group-tests/medium-button-group">Medium Button Group</Link></li>
      <li><Link to="/tests/button-group-tests/large-button-group">Large Button Group</Link></li>
      <li><Link to="/tests/button-group-tests/huge-button-group">Huge Button Group</Link></li>
      <li><Link to="/tests/button-group-tests/compact-button-group">Compact Button Group</Link></li>
      <li><Link to="/tests/button-group-tests/icon-default-button-group">Icon Default Button Group</Link></li>
      <li><Link to="/tests/button-group-tests/icon-reversed-button-group">Icon Reversed Button Group</Link></li>
      <li><Link to="/tests/button-group-tests/icon-only-button-group">Icon Only Button Group</Link></li>
      <li><Link to="/tests/button-group-tests/default-variant-button-group">Default Variant Button Group</Link></li>
      <li><Link to="/tests/button-group-tests/secondary-variant-button-group">Secondary Variant Button Group</Link></li>
      <li><Link to="/tests/button-group-tests/selectable-button-group">Selectable Button Group</Link></li>
    </ul>
  </div>
);

export default ButtonGroupTests;
