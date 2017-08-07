/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import MenuItemTests from './MenuItemTests';

// Test Cases
import DefaultMenuItem from './MenuItemDefault';
import MenuItemWrappedText from './MenuItemWrappedText';
import MenuItemSubmenu from './MenuItemSubMenu';
import MenuItemSelectable from './MenuItemSelectable';

const routes = (
  <div>
    <Route path="/tests/menu-item-tests" component={MenuItemTests} />
    <Route path="/tests/menu-item-tests/default" component={DefaultMenuItem} />
    <Route path="/tests/menu-item-tests/wrapped-text" component={MenuItemWrappedText} />
    <Route path="/tests/menu-item-tests/submenu" component={MenuItemSubmenu} />
    <Route path="/tests/menu-item-tests/selectable" component={MenuItemSelectable} />
  </div>
);

export default routes;
