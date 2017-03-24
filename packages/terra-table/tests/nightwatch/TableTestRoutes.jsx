/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TableTests from './TableTests';
import DefaultTable from './components/NoStripedTable';
import SingleRowSelectableTable from './components/SingleRowSelectableTable';
import StripedTable from './components/StripedTable';
import TableWithHighlightedRows from './components/TableWithHighlightedRows';
import TableWithNonSelectableRow from './components/TableWithNonSelectableRow';
import TableWithSortingIndicator from './components/TableWithSortingIndicator';

const routes = (
  <div>
    <Route path="/tests/table-tests" component={TableTests} />
    <Route path="/tests/table-tests/default" component={DefaultTable} />
    <Route path="/tests/table-tests/selectableTable" component={SingleRowSelectableTable} />
    <Route path="/tests/table-tests/stripedTable" component={StripedTable} />
    <Route path="/tests/table-tests/tableWithHighlightedRows" component={TableWithHighlightedRows} />
    <Route path="/tests/table-tests/tableWithNonSelectableRow" component={TableWithNonSelectableRow} />
    <Route path="/tests/table-tests/tableWithSortingIndicator" component={TableWithSortingIndicator} />
  </div>
);

export default routes;
