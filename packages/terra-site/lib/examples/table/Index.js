'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraPropsTable = require('terra-props-table');

var _terraPropsTable2 = _interopRequireDefault(_terraPropsTable);

var _terraMarkdown = require('terra-markdown');

var _terraMarkdown2 = _interopRequireDefault(_terraMarkdown);

var _README = require('terra-table/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-list/package.json');

var _Table = require('!raw-loader!terra-table/src/Table');

var _Table2 = _interopRequireDefault(_Table);

var _SingleSelectableRows = require('!raw-loader!terra-table/src/SingleSelectableRows');

var _SingleSelectableRows2 = _interopRequireDefault(_SingleSelectableRows);

var _TableHeader = require('!raw-loader!terra-table/src/TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableHeaderCell = require('!raw-loader!terra-table/src/TableHeaderCell');

var _TableHeaderCell2 = _interopRequireDefault(_TableHeaderCell);

var _TableRow = require('!raw-loader!terra-table/src/TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableRows = require('!raw-loader!terra-table/src/TableRows');

var _TableRows2 = _interopRequireDefault(_TableRows);

var _TableCell = require('!raw-loader!terra-table/src/TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _NoStripedTable = require('./NoStripedTable');

var _NoStripedTable2 = _interopRequireDefault(_NoStripedTable);

var _NoPaddingTable = require('./NoPaddingTable');

var _NoPaddingTable2 = _interopRequireDefault(_NoPaddingTable);

var _StripedTable = require('./StripedTable');

var _StripedTable2 = _interopRequireDefault(_StripedTable);

var _TableWithHighlightedRows = require('./TableWithHighlightedRows');

var _TableWithHighlightedRows2 = _interopRequireDefault(_TableWithHighlightedRows);

var _SingleRowSelectableTable = require('./SingleRowSelectableTable');

var _SingleRowSelectableTable2 = _interopRequireDefault(_SingleRowSelectableTable);

var _TableWithNonSelectableRow = require('./TableWithNonSelectableRow');

var _TableWithNonSelectableRow2 = _interopRequireDefault(_TableWithNonSelectableRow);

var _TableWithSortingIndicator = require('./TableWithSortingIndicator');

var _TableWithSortingIndicator2 = _interopRequireDefault(_TableWithSortingIndicator);

var _TableWithLongContent = require('./TableWithLongContent');

var _TableWithLongContent2 = _interopRequireDefault(_TableWithLongContent);

var _TableWithCustomCells = require('./TableWithCustomCells');

var _TableWithCustomCells2 = _interopRequireDefault(_TableWithCustomCells);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
var TableExamples = function TableExamples() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { id: 'version' },
      'Version: ',
      _package.version
    ),
    _react2.default.createElement(_terraMarkdown2.default, { id: 'readme', src: _README2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Table'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props-table', src: _Table2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Table Header'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props-tableHeader', src: _TableHeader2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Table Header Cell'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props-tableHeaderCell', src: _TableHeaderCell2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Table Rows'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props-tableRows', src: _TableRows2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Single Selectable Table Row'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props-singleSelectableRows', src: _SingleSelectableRows2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Table Row'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props-tableRow', src: _TableRow2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Table Cell'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props-tablecell', src: _TableCell2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Table without zebra stripes'
    ),
    _react2.default.createElement(_NoStripedTable2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Table with zebra stripes'
    ),
    _react2.default.createElement(_StripedTable2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Table without padding'
    ),
    _react2.default.createElement(_NoPaddingTable2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Table with some rows selected. Table will not select or deselect any row'
    ),
    _react2.default.createElement(_TableWithHighlightedRows2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Selectable table. Only one row can be selected'
    ),
    _react2.default.createElement(_SingleRowSelectableTable2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Selectable table with second row as non selectable'
    ),
    _react2.default.createElement(_TableWithNonSelectableRow2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Table with sorting indicator'
    ),
    _react2.default.createElement(_TableWithSortingIndicator2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Table with long content'
    ),
    _react2.default.createElement(_TableWithLongContent2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Table with custom cells'
    ),
    _react2.default.createElement(_TableWithCustomCells2.default, null)
  );
};
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

/* eslint-disable import/no-extraneous-dependencies */
exports.default = TableExamples;