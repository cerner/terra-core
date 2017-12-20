/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';

// List Component Indexes
import MultiSelectIndex from './components/MultiSelectIndex';
import SingleSelectIndex from './components/SingleSelectIndex';
import SelectableListIndex from './components/SelectableListIndex';

const routes = (
  <div>
    <Route path="/site/list/selectable" component={SelectableListIndex} />
    <Route path="/site/list/single-select" component={SingleSelectIndex} />
    <Route path="/site/list/multi-select" component={MultiSelectIndex} />
  </div>
);

export default routes;
