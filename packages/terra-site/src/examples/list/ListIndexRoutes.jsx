/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';

// Form Component Indexes
import MultiSelectIndex from './components/MultiSelectIndex';
import SingleSelectIndex from './components/SingleSelectIndex';

const routes = (
  <div>
    <Route path="/site/list/multi-select" component={MultiSelectIndex} />
    <Route path="/site/list/single-select" component={SingleSelectIndex} />
  </div>
);

export default routes;
