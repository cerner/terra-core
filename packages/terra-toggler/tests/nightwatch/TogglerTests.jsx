/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const TogglerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/toggler-tests/default">Toggler Default</Link></li>
      <li><Link to="/tests/toggler-tests/no-animation">Toggler Animation Disabled</Link></li>
      <li><Link to="/tests/toggler-tests/event">Toggler Events on Toggle</Link></li>
      <li><Link to="/tests/toggler-tests/render-open">Toggler Open on Load</Link></li>
    </ul>
  </div>
);

export default TogglerTests;
