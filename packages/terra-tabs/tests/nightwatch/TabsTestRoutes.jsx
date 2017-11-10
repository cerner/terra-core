/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import TabsTests from './TabsTests';

// Test Cases
import DefaultTabs from './DefaultTabs';

const routes = (
  <div>
    <Route path="/tests/tabs-tests" component={TabsTests} />
    <Route path="/tests/tabs-tests/default" component={DefaultTabs} />
  </div>
);

export default routes;
