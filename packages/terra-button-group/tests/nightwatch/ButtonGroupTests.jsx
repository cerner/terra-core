/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ButtonGroupTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/button-group-tests/DefaultButtonGroup">Default ButtonGroup</Link></li>
      <li><Link to="/tests/button-group-tests/SizeButtonGroup">Button Group Sizes</Link></li>
    </ul>
  </div>
);

export default ButtonGroupTests;
