/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import MenuTests from './MenuTests';

// Test Cases
import DefaultMenu from './DefaultMenu';
import BoundedMenu from './BoundedMenu';
import LargeMenu from './LargeMenu';
import MediumMenu from './MediumMenu';
import SmallMenu from './SmallMenu';
import SelectableMenu from './SelectableMenu';
import NonSelectableMenu from './NonSelectableMenu';
import SubMenu from './SubMenu';

const routes = (
  <div>
    <Route path="/tests/menu-tests" component={MenuTests} />
    <Route path="/tests/menu-tests/default" component={DefaultMenu} />
    <Route path="/tests/menu-tests/bounded" component={BoundedMenu} />
    <Route path="/tests/menu-tests/large" component={LargeMenu} />
    <Route path="/tests/menu-tests/medium" component={MediumMenu} />
    <Route path="/tests/menu-tests/small" component={SmallMenu} />
    <Route path="/tests/menu-tests/selectable" component={SelectableMenu} />
    <Route path="/tests/menu-tests/non-selectable" component={NonSelectableMenu} />
    <Route path="/tests/menu-tests/submenu" component={SubMenu} />
  </div>
);

export default routes;
