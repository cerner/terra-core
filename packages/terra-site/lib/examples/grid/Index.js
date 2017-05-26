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

var _README = require('terra-grid/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-grid/package.json');

var _Grid = require('!raw-loader!terra-grid/src/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _GridRow = require('!raw-loader!terra-grid/src/GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

var _GridColumn = require('!raw-loader!terra-grid/src/GridColumn');

var _GridColumn2 = _interopRequireDefault(_GridColumn);

var _GridDefault = require('./GridDefault');

var _GridDefault2 = _interopRequireDefault(_GridDefault);

var _GridResponsive = require('./GridResponsive');

var _GridResponsive2 = _interopRequireDefault(_GridResponsive);

var _GridNested = require('./GridNested');

var _GridNested2 = _interopRequireDefault(_GridNested);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved, import/extensions */
var GridExamples = function GridExamples() {
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
      'Grid'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _Grid2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Grid Row'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _GridRow2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Grid Column'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _GridColumn2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'default' },
      'Default Grid'
    ),
    _react2.default.createElement(_GridDefault2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'responsive' },
      'Responsive Grid'
    ),
    _react2.default.createElement(_GridResponsive2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'nested' },
      'Nested Grid'
    ),
    _react2.default.createElement(_GridNested2.default, null)
  );
};
/* eslint-enable import/no-webpack-loader-syntax, import/no-unresolved, import/extensions */

// Example Files
exports.default = GridExamples;