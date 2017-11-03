/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';

// TabContainer Component Indexes
import SelectableTabContainerIndex from './components/SelectableTabContainerIndex';

const routes = (
  <div>
    <Route path="/site/tab-container/selectable" component={SelectableTabContainerIndex} />
  </div>
);

export default routes;
