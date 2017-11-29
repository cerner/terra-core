/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SearchFieldTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/search-field-tests/default">SearchField - Default </Link></li>
      <li><Link to="/tests/search-field-tests/placeholder">SearchField - Placeholder </Link></li>
      <li><Link to="/tests/search-field-tests/callback">SearchField - Callback for Valid and Invalid Entry </Link></li>
      <li><Link to="/tests/search-field-tests/delayed">SearchField - 1000ms Delayed </Link></li>
      <li><Link to="/tests/search-field-tests/minimum-length">SearchField - 5 Character Minimum Length </Link></li>
      <li><Link to="/tests/search-field-tests/default-value">SearchField - Default Value </Link></li>
      <li><Link to="/tests/search-field-tests/onchange">SearchField - Handle On Change </Link></li>
      <li><Link to="/tests/search-field-tests/value">SearchField - With Value </Link></li>
      <li><Link to="/tests/search-field-tests/disabled">SearchField - Disabled</Link></li>
      <li><Link to="/tests/search-field-tests/block">SearchField - Block Style</Link></li>
      <li><Link to="/tests/search-field-tests/disable-auto-search">SearchField - Auto Search Disabled </Link></li>
      <li><Link to="/tests/search-field-tests/enter">SearchField - Enter Key </Link></li>
    </ul>
  </div>
);

export default SearchFieldTests;
