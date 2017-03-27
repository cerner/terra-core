/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ListItemTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/list-item-tests/default">Default ListItem</Link></li>
      <li><Link to="/tests/list-item-tests/selected">Selected ListItem</Link></li>
      <li><Link to="/tests/list-item-tests/selectable">Selectable ListItem</Link></li>
      <li><Link to="/tests/list-item-tests/chevron">Chevron ListItem</Link></li>
      <li><Link to="/tests/list-item-tests/content">Content ListItem</Link></li>
    </ul>
  </div>
);

export default ListItemTests;
