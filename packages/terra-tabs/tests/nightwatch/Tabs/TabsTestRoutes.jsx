/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import TabsTests from './TabsTests';

// Test Cases
import DefaultTabs from './DefaultTabs';
import ControlledTabs from './ControlledTabs';
import ManyTabs from './ManyTabs';
import IconOnlyTabs from './IconOnlyTabs';

const routes = (
  <div>
    <Route path="/tests/tabs-tests" component={TabsTests} />
    <Route path="/tests/tabs-tests/default" component={DefaultTabs} />
    <Route path="/tests/tabs-tests/controlled" component={ControlledTabs} />
    <Route path="/tests/tabs-tests/many-tabs" component={ManyTabs} />
    <Route path="/tests/tabs-tests/icon-only" component={IconOnlyTabs} />
  </div>
);

export default routes;
