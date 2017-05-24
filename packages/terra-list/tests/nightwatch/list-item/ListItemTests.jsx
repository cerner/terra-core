/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ListItemTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/list-item-tests/default">ListItem - Default</Link></li>
      <li><Link to="/tests/list-item-tests/selected">ListItem - Selected </Link></li>
      <li><Link to="/tests/list-item-tests/selectable">ListItem - Selectable</Link></li>
      <li><Link to="/tests/list-item-tests/chevron">ListItem - Chevron</Link></li>
    </ul>
  </div>
);

export default ListItemTests;
