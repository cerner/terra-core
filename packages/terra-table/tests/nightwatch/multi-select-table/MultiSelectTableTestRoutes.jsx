/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import MultiSelectTableTests from './MultiSelectTableTests';
import Table from './components/MultiRowSelectableTable';
import TableOnChange from './components/MultiRowSelectableTableOnChange';
import TablePreselected from './components/MultiRowSelectableTablePreselected';
import TableNonSelectable from './components/MultiRowSelectableTableNonSelectable';
import TableMaxCount from './components/MultiRowSelectableTableMaxCount';
import TableMaxCountInitiallyMet from './components/MultiRowSelectableTableMaxCountInitiallyMet';
import TableMaxCountInitiallyExceeded from './components/MultiRowSelectableTableMaxCountInitiallyExceeded';

const routes = (
  <div>
    <Route path="/tests/multi-select-table-tests" component={MultiSelectTableTests} />
    <Route path="/tests/multi-select-table-tests/default" component={Table} />
    <Route path="/tests/multi-select-table-tests/onchange" component={TableOnChange} />
    <Route path="/tests/multi-select-table-tests/preselected" component={TablePreselected} />
    <Route path="/tests/multi-select-table-tests/non-selectable" component={TableNonSelectable} />
    <Route path="/tests/multi-select-table-tests/max-count" component={TableMaxCount}>Multi Select Table - Max Count Specified</Route>
    <Route path="/tests/multi-select-table-tests/max-count-initially-met" component={TableMaxCountInitiallyMet}>Multi Select Table - Max Count Initially Met</Route>
    <Route path="/tests/multi-select-table-tests/max-count-initially-exceeded" component={TableMaxCountInitiallyExceeded}>Multi Select Table - Max Count Initially Exceeded</Route>
  </div>
);

export default routes;
