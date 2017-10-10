/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SingleSelectListTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/single-select-list-tests/default">SingleSelectList - Default</Link></li>
      <li><Link to="/tests/single-select-list-tests/on-change">SingleSelectList - OnChange Provided</Link></li>
    </ul>
  </div>
);

export default SingleSelectListTests;
