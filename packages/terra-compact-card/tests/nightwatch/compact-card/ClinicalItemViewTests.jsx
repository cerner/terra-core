/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const CLinicalItemViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/clincal-item-view-tests/default">Default CLinicalItemView</Link></li>
      <li><Link to="/tests/clincal-item-view-tests/displays">Displays CLinicalItemView</Link></li>
      <li><Link to="/tests/clincal-item-view-tests/accessory">Accessory CLinicalItemView</Link></li>
      <li><Link to="/tests/clincal-item-view-tests/comment">Comment CLinicalItemView</Link></li>
    </ul>
  </div>
);

export default CLinicalItemViewTests;
