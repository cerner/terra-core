/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import CompactCardTests from './CompactCardTests';
import DefaultCompactCard from './DefaultCompactCard';
import DisplaysCompactCard from './DisplaysCompactCard';
import AccessoryCompactCard from './AccessoryCompactCard';
import CommentCompactCard from './CommentCompactCard';

const routes = (
  <div>
    <Route path="/tests/compact-card-tests" component={CompactCardTests} />
    <Route path="/tests/compact-card-tests/default" component={DefaultCompactCard} />
    <Route path="/tests/compact-card-tests/displays" component={DisplaysCompactCard} />
    <Route path="/tests/compact-card-tests/accessory" component={AccessoryCompactCard} />
    <Route path="/tests/compact-card-tests/comment" component={CommentCompactCard} />
  </div>
);

export default routes;
