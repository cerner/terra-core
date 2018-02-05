/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ButtonGroupTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/button-group-tests/text-button-group">Button Group - Text</Link></li>
      <li><Link to="/tests/button-group-tests/long-text-button-group">Button Group - Long Text</Link></li>
      <li><Link to="/tests/button-group-tests/icon-button-group">Button Group - Icon</Link></li>
      <li><Link to="/tests/button-group-tests/not-selectable-button-group">Button Group - Not Selectable</Link></li>
      <li><Link to="/tests/button-group-tests/disabled-button-group">Button Group - Disabled Buttons</Link></li>
      <li><Link to="/tests/button-group-tests/single-select-button-group">Button Group - Single-Select</Link></li>
      <li><Link to="/tests/button-group-tests/multi-select-button-group">Button Group - Multi-Select</Link></li>
    </ul>
  </div>
);

export default ButtonGroupTests;
