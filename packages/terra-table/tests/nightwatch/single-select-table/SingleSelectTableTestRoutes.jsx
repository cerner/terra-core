/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SingleSelectTableTests from './SingleSelectTableTests';
import SelectableTable from './components/SelectableTable';
import SingleRowSelectableTable from './components/SingleRowSelectableTable';
import SelectableTableNoRows from './components/SelectableTableNoRows';
import SingleRowSelectableTableOnChange from './components/SingleRowSelectableTableOnChange';
import TableWithSelectableRowsAndSubheaders from './components/TableWithSelectableRowsAndSubheaders';
import SingleRowSelectableTablePreselected from './components/SingleRowSelectableTablePreselected';
import SingleRowSelectableTableNonSelectable from './components/SingleRowSelectableTableNonSelectable';

const routes = (
  <div>
    <Route path="/tests/single-select-table-tests" component={SingleSelectTableTests} />
    <Route path="/tests/single-select-table-tests/onchange" component={SingleRowSelectableTableOnChange} />
    <Route path="/tests/single-select-table-tests/default" component={SelectableTable} />
    <Route path="/tests/single-select-table-tests/single-row" component={SingleRowSelectableTable} />
    <Route path="/tests/single-select-table-tests/no-rows" component={SelectableTableNoRows} />
    <Route path="/tests/single-select-table-tests/subheaders" component={TableWithSelectableRowsAndSubheaders} />
    <Route path="/tests/single-select-table-tests/preselected" component={SingleRowSelectableTablePreselected} />
    <Route path="/tests/single-select-table-tests/non-selectable" component={SingleRowSelectableTableNonSelectable} />
  </div>
);

export default routes;
