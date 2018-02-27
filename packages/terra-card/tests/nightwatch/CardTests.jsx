/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const CardTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/card-tests/default">Card - Default</Link></li>
      <li><Link to="/tests/card-tests/padding">Card - Padding</Link></li>
      <li><Link to="/tests/card-tests/paddingvertical">Card - Padding Vertical</Link></li>
      <li><Link to="/tests/card-tests/paddinghorizontal">Card - Padding Horizontal</Link></li>
      <li><Link to="/tests/card-tests/contentcenter">Card - Content Center</Link></li>
    </ul>
  </div>
);

export default CardTests;
