/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TableTests from './TableTests';
import DefaultTable from './components/StripedTable';
import NoStripedTable from './components/NoStripedTable';
import NoPaddingTable from './components/NoPaddingTable';
import SingleRowTable from './components/SingleRowTable';
import TableNoRows from './components/TableNoRows';
import SelectableTable from './components/SelectableTable';
import SingleRowSelectableTableOnChange from './components/SingleRowSelectableTableOnChange';
import TableWithHighlightedRows from './components/TableWithHighlightedRows';
import TableWithSortIndicator from './components/TableWithSortIndicator';
import TableWithSubheaders from './components/TableWithSubheaders';

const routes = (
  <div>
    <Route path="/tests/table-tests" component={TableTests} />
    <Route path="/tests/table-tests/default" component={DefaultTable} />
    <Route path="/tests/table-tests/no-striped" component={NoStripedTable} />
    <Route path="/tests/table-tests/no-padding" component={NoPaddingTable} />
    <Route path="/tests/table-tests/table-no-rows" component={TableNoRows} />
    <Route path="/tests/table-tests/single-row-table" component={SingleRowTable} />
    <Route path="/tests/table-tests/selectable-table-onchange" component={SingleRowSelectableTableOnChange} />
    <Route path="/tests/table-tests/selectable-table" component={SelectableTable} />
    <Route path="/tests/table-tests/table-highlighted-rows" component={TableWithHighlightedRows} />
    <Route path="/tests/table-tests/table-sort-indicator" component={TableWithSortIndicator} />
    <Route path="/tests/table-tests/table-subheaders" component={TableWithSubheaders} />
  </div>
);

export default routes;
