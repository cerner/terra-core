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
import SingleRowSelectableTable from './components/SingleRowSelectableTable';
import SelectableTableNoRows from './components/SelectableTableNoRows';
import SingleRowSelectableTableOnChange from './components/SingleRowSelectableTableOnChange';
import TableWithHighlightedRows from './components/TableWithHighlightedRows';
import TableWithSortIndicator from './components/TableWithSortIndicator';
import TableWithSubheaders from './components/TableWithSubheaders';
import TableWithSelectableRowsAndSubheaders from './components/TableWithSelectableRowsAndSubheaders';
import MultipleRowSelectableTableMultipleRows from './components/MultipleRowSelectableTableMultipleRows';
import MultipleRowSelectableTableSingleRow from './components/MultipleRowSelectableTableSingleRow';
import MultipleRowSelectableTableNoRows from './components/MultipleRowSelectableTableNoRows';
import MultipleRowSelectableTableOnChange from './components/MultipleRowSelectableTableOnChange';
import MultipleRowSelectableTableSubheaders from './components/MultipleRowSelectableTableSubheaders';
import MultipleRowSelectableTablePreselectedRow from './components/MultipleRowSelectableTablePreselectedRow';

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
    <Route path="/tests/table-tests/selectable-table-single-row" component={SingleRowSelectableTable} />
    <Route path="/tests/table-tests/selectable-table-no-rows" component={SelectableTableNoRows} />
    <Route path="/tests/table-tests/table-highlighted-rows" component={TableWithHighlightedRows} />
    <Route path="/tests/table-tests/table-sort-indicator" component={TableWithSortIndicator} />
    <Route path="/tests/table-tests/table-subheaders" component={TableWithSubheaders} />
    <Route path="/tests/table-tests/table-selectable-subheaders" component={TableWithSelectableRowsAndSubheaders} />
    <Route path="/tests/table-tests/multiple-selectable-table-single-row" component={MultipleRowSelectableTableSingleRow} />
    <Route path="/tests/table-tests/multiple-selectable-table-no-rows" component={MultipleRowSelectableTableNoRows} />
    <Route path="/tests/table-tests/multiple-selectable-table-multiple-rows" component={MultipleRowSelectableTableMultipleRows} />
    <Route path="/tests/table-tests/multiple-selectable-table-onchange" component={MultipleRowSelectableTableOnChange} />
    <Route path="/tests/table-tests/multiple-selectable-table-subheaders" component={MultipleRowSelectableTableSubheaders} />
    <Route path="/tests/table-tests/multiple-selectable-table-preselected-row" component={MultipleRowSelectableTablePreselectedRow} />
  </div>
);

export default routes;
