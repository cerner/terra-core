/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import SelectableTableRowsTests from './SelectableTableTests';
import SelectableTableRowsDefault from './components/SelectableTableRowsDefault';
import SelectableTableRowsAndSubheaders from './components/SelectableTableRowsAndSubheaders';
import SelectableTableRowsPreselected from './components/SelectableTableRowsPreselected';
import SelectableTableRowsNonSelectable from './components/SelectableTableRowsNonSelectable';
import SelectableTableRowsOnChange from './components/SelectableTableRowsOnChange';
import SelectableTableRowsNoRows from './components/SelectableTableRowsNoRows';
import SelectableTableRowsOneRow from './components/SelectableTableRowsOneRow';

import SelectableTableRowsDisabled from './components/SelectableTableRowsDisabled';

const routes = (
  <div>
    <Route path="/tests/selectable-table-tests" component={SelectableTableRowsTests} />
    <Route path="/tests/selectable-table-tests/default" component={SelectableTableRowsDefault} />
    <Route path="/tests/selectable-table-tests/subheaders" component={SelectableTableRowsAndSubheaders} />
    <Route path="/tests/selectable-table-tests/preselected" component={SelectableTableRowsPreselected} />
    <Route path="/tests/selectable-table-tests/non-selectable" component={SelectableTableRowsNonSelectable} />
    <Route path="/tests/selectable-table-tests/onchange" component={SelectableTableRowsOnChange} />
    <Route path="/tests/selectable-table-tests/single-row" component={SelectableTableRowsOneRow} />
    <Route path="/tests/selectable-table-tests/no-rows" component={SelectableTableRowsNoRows} />
    <Route path="/tests/selectable-table-tests/non-selected-disabled" component={SelectableTableRowsDisabled} />
  </div>
);

export default routes;
