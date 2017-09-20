/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import CollapsibleMenuViewTests from './CollapsibleMenuViewTests';

// Test Cases
import DefaultCollapsibleMenuView from './DefaultCollapsibleMenuView';

const routes = (
  <div>
    <Route path="/tests/collapsible-menu-view-tests" component={CollapsibleMenuViewTests} />
    <Route path="/tests/collapsible-menu-view-tests/default" component={DefaultCollapsibleMenuView} />
  </div>
);

export default routes;
