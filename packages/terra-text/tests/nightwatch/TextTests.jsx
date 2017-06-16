/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const TextTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/text-tests/default">Text - Default</Link></li>
      <li><Link to="/tests/text-tests/color">Text - Color</Link></li>
      <li><Link to="/tests/text-tests/font-size">Text - Font Size</Link></li>
      <li><Link to="/tests/text-tests/italics">Text - Italics</Link></li>
      <li><Link to="/tests/text-tests/visually-hidden">Text - Visually Hidden</Link></li>
      <li><Link to="/tests/text-tests/visual-props">Text - Visual Props</Link></li>
      <li><Link to="/tests/text-tests/weight">Text - Weight</Link></li>
    </ul>
  </div>
);

export default TextTests;
