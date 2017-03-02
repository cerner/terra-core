/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const TestLinks = () => (
  <div>
    <ul>
      <li><Link to="/tests/button-tests">Button Tests</Link></li>
    </ul>
  </div>
);

export default TestLinks;
