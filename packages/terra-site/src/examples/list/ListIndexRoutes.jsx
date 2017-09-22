/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';

// Form Component Indexes
import List from './components/List';
import MultiSelect from './components/MultiSelect';
import MultiSelectMaxSelection from './components/MultiSelectMaxSelection';
import SingleSelect from './components/SingleSelect';

const routes = (
  <div>
    <Route path="/site/list/list" component={List} />
    <Route path="/site/list/multi-select" component={MultiSelect} />
    <Route path="/site/list/multi-select-max-selection" component={MultiSelectMaxSelection} />
    <Route path="/site/list/single-select" component={SingleSelect} />
  </div>
);

export default routes;
