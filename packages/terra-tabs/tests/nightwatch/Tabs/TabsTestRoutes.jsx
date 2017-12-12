/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import TabsTests from './TabsTests';

// Test Cases
import DefaultTabs from './DefaultTabs';
import ControlledTabs from './ControlledTabs';
import IconOnlyTabs from './IconOnlyTabs';
import ExtendedTabs from './ExtendedTabs';
import FillParentTabs from './FillParentTabs';


const routes = (
  <div>
    <Route path="/tests/tabs-tests" component={TabsTests} />
    <Route path="/tests/tabs-tests/default" component={DefaultTabs} />
    <Route path="/tests/tabs-tests/controlled" component={ControlledTabs} />
    <Route path="/tests/tabs-tests/icon-only" component={IconOnlyTabs} />
    <Route path="/tests/tabs-tests/extended" component={ExtendedTabs} />
    <Route path="/tests/tabs-tests/fill-parent" component={FillParentTabs} />
  </div>
);

export default routes;
