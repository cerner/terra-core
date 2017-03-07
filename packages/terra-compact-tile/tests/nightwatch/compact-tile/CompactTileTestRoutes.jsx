/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import CompactTileTests from './CompactTileTests';
import DefaultCompactTile from './DefaultCompactTile';
import DisplaysCompactTile from './DisplaysCompactTile';
import AccessoryCompactTile from './AccessoryCompactTile';
import CommentCompactTile from './CommentCompactTile';

const routes = (
  <div>
    <Route path="/tests/compact-tile-tests" component={CompactTileTests} />
    <Route path="/tests/compact-tile-tests/default" component={DefaultCompactTile} />
    <Route path="/tests/compact-tile-tests/displays" component={DisplaysCompactTile} />
    <Route path="/tests/compact-tile-tests/accessory" component={AccessoryCompactTile} />
    <Route path="/tests/compact-tile-tests/comment" component={CommentCompactTile} />
  </div>
);

export default routes;
