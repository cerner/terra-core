/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ClinicalItemViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/clinical-item-view-tests/default">Default CLinicalItemView</Link></li>
      <li><Link to="/tests/clinical-item-view-tests/displays">Displays CLinicalItemView</Link></li>
      <li><Link to="/tests/clinical-item-view-tests/accessory">Accessory CLinicalItemView</Link></li>
      <li><Link to="/tests/clinical-item-view-tests/comment">Comment CLinicalItemView</Link></li>
    </ul>
  </div>
);

export default ClinicalItemViewTests;
