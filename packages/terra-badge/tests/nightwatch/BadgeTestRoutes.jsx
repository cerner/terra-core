/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import BadgeTests from './BadgeTests';
import BadgeDefault from './BadgeDefault';
import BadgeIntent from './BadgeIntent';
import BadgeSize from './BadgeSize';
import BadgeIcon from './BadgeIcon';

const routes = (
  <div>
    <Route path="/tests/badge-tests" component={BadgeTests} />
    <Route path="/tests/badge-tests/default" component={BadgeDefault} />
    <Route path="/tests/badge-tests/intent" component={BadgeIntent} />
    <Route path="/tests/badge-tests/size" component={BadgeSize} />
    <Route path="/tests/badge-tests/icon" component={BadgeIcon} />
  </div>
);

export default routes;
