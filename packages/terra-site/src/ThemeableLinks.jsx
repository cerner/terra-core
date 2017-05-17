/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const ThemableComponentLinks = () => (
  <div>
    <ul>
      <li><Link to="/themeable-components/list">List</Link></li>
      <li><Link to="/themeable-components/table">Table</Link></li>
    </ul>
  </div>
);

export default ThemableComponentLinks;
