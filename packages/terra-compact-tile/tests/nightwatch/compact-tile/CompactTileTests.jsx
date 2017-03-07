/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const CompactTileTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/compact-tile-tests/default">Default CompactTile</Link></li>
      <li><Link to="/tests/compact-tile-tests/displays">Displays CompactTile</Link></li>
      <li><Link to="/tests/compact-tile-tests/accessory">Accessory CompactTile</Link></li>
      <li><Link to="/tests/compact-tile-tests/comment">Comment CompactTile</Link></li>
    </ul>
  </div>
);

export default CompactTileTests;
