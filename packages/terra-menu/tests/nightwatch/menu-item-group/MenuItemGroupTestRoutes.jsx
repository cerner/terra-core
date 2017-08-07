/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import MenuItemGroupTests from './MenuItemGroupTests';

// Test Cases
import DefaultMenuItemGroup from './MenuItemGroupDefault';

const routes = (
  <div>
    <Route path="/tests/menu-item-group-tests" component={MenuItemGroupTests} />
    <Route path="/tests/menu-item-group-tests/default" component={DefaultMenuItemGroup} />
  </div>
);

export default routes;
