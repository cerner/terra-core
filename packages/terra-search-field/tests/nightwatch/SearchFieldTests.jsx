/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SearchFieldTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/search-field-tests/default">Default SearchField</Link></li>
      <li><Link to="/tests/search-field-tests/placeholder">Placeholder SearchField</Link></li>
      <li><Link to="/tests/search-field-tests/callback">Callback SearchField</Link></li>
      <li><Link to="/tests/search-field-tests/delayed">1000ms Delayed SearchField</Link></li>
      <li><Link to="/tests/search-field-tests/minimum-length">5 Character Minimum Length SearchField</Link></li>
    </ul>
  </div>
);

export default SearchFieldTests;
