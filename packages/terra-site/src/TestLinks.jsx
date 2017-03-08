/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const TestLinks = () => (
  <div>
    <ul>
      <li><Link to="/tests/button-tests">Button Tests</Link></li>
      <li><Link to="/tests/slide-panel-tests">SlidePanel Tests</Link></li>
    </ul>
  </div>
);

export default TestLinks;
