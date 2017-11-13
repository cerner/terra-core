/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';

// Form Component Indexes
import MultiSelectIndex from './components/MultiSelectIndex';

const routes = (
  <div>
    <Route path="/site/table/multi-select" component={MultiSelectIndex} />
  </div>
);

export default routes;
