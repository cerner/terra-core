'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraTable = require('terra-table');

var _terraTable2 = _interopRequireDefault(_terraTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var TableWithLongContent = function TableWithLongContent() {
  return _react2.default.createElement(
    _terraTable2.default,
    { isStriped: false },
    _react2.default.createElement(
      _terraTable2.default.Header,
      null,
      _react2.default.createElement(_terraTable2.default.HeaderCell, { content: 'Column Heading 1', key: 'COLUMN_0', minWidth: 'small' }),
      _react2.default.createElement(_terraTable2.default.HeaderCell, { content: 'Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header End Header', key: 'COLUMN_1', minWidth: 'medium' }),
      _react2.default.createElement(_terraTable2.default.HeaderCell, { content: 'Column Heading 3', key: 'COLUMN_2', minWidth: 'large' })
    ),
    _react2.default.createElement(
      _terraTable2.default.SingleSelectableRows,
      null,
      _react2.default.createElement(
        _terraTable2.default.Row,
        { isSelectable: true, key: 'ROW_0' },
        _react2.default.createElement(_terraTable2.default.Cell, { content: 'Table Data', key: 'COLUMN_0' }),
        _react2.default.createElement(_terraTable2.default.Cell, { content: 'Table Data', key: 'COLUMN_1' }),
        _react2.default.createElement(_terraTable2.default.Cell, { content: 'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text', key: 'COLUMN_2' })
      ),
      _react2.default.createElement(
        _terraTable2.default.Row,
        { isSelectable: true, key: 'ROW_1' },
        _react2.default.createElement(_terraTable2.default.Cell, { content: 'Table Data', key: 'COLUMN_0' }),
        _react2.default.createElement(_terraTable2.default.Cell, { content: 'Table Data', key: 'COLUMN_1' }),
        _react2.default.createElement(_terraTable2.default.Cell, { content: 'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text', key: 'COLUMN_2' })
      ),
      _react2.default.createElement(
        _terraTable2.default.Row,
        { isSelectable: true, key: 'ROW_2' },
        _react2.default.createElement(_terraTable2.default.Cell, { content: 'Table Data', key: 'COLUMN_0' }),
        _react2.default.createElement(_terraTable2.default.Cell, { content: 'Table Data', key: 'COLUMN_1' }),
        _react2.default.createElement(_terraTable2.default.Cell, { content: 'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text', key: 'COLUMN_2' })
      )
    )
  );
};

exports.default = TableWithLongContent;