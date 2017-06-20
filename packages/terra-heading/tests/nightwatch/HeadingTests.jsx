/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const HeadingTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/heading-tests/default">Heading - Default</Link></li>
      <li><Link to="/tests/heading-tests/color">Heading - Color</Link></li>
      <li><Link to="/tests/heading-tests/size">Heading - Size</Link></li>
      <li><Link to="/tests/heading-tests/italics">Heading - Italics</Link></li>
      <li><Link to="/tests/heading-tests/levels">Heading - Levels</Link></li>
      <li><Link to="/tests/heading-tests/visually-hidden">Heading - Visually Hidden</Link></li>
      <li><Link to="/tests/heading-tests/visual-props">Heading - Visual Props</Link></li>
      <li><Link to="/tests/heading-tests/weight">Heading - Weight</Link></li>
    </ul>
  </div>
);

export default HeadingTests;
