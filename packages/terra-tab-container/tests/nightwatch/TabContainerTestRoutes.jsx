/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import TabContainerTests from './TabContainerTests';

// Test Cases
import DefaultTabContainer from './DefaultTabContainer';

const routes = (
  <div>
    <Route path="/tests/tab-container-tests" component={TabContainerTests} />
    <Route path="/tests/tab-container-tests/default" component={DefaultTabContainer} />
  </div>
);

export default routes;
