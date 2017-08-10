/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const CardTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/card-tests/default">Card - Default</Link></li>
      <li><Link to="/tests/card-tests/noPadding">Card - No Padding</Link></li>
    </ul>
  </div>
);

export default CardTests;
