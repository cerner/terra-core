'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraTable = require('terra-table');

var _terraTable2 = _interopRequireDefault(_terraTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomCell = function CustomCell(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      props.text
    ),
    props.subtext ? _react2.default.createElement(
      'h4',
      { style: { color: 'grey' } },
      props.subtext
    ) : null
  );
}; /* eslint-disable import/no-extraneous-dependencies */


CustomCell.propTypes = {
  text: _propTypes2.default.string,
  subtext: _propTypes2.default.string
};

var TableWithCustomCells = function TableWithCustomCells() {
  return _react2.default.createElement(
    _terraTable2.default,
    null,
    _react2.default.createElement(
      _terraTable2.default.Header,
      null,
      _react2.default.createElement(_terraTable2.default.HeaderCell, { content: 'Name', key: 'NAME', minWidth: 'small' }),
      _react2.default.createElement(_terraTable2.default.HeaderCell, { content: 'Address', key: 'ADDRESS', minWidth: 'medium' }),
      _react2.default.createElement(_terraTable2.default.HeaderCell, { content: 'Phone Number', key: 'PHONE_NUMBER', minWidth: 'large' })
    ),
    _react2.default.createElement(
      _terraTable2.default.SingleSelectableRows,
      null,
      _react2.default.createElement(
        _terraTable2.default.Row,
        { isSelected: true, isSelectable: true, key: 'PERSON_0' },
        _react2.default.createElement(_terraTable2.default.Cell, { content: _react2.default.createElement(CustomCell, { text: 'John Smith', subtext: 'Super Cool Person' }), key: 'NAME' }),
        _react2.default.createElement(_terraTable2.default.Cell, { content: _react2.default.createElement(CustomCell, { text: '123 Adams Drive', subtext: 'Missouri' }), key: 'ADDRESS' }),
        _react2.default.createElement(_terraTable2.default.Cell, { content: _react2.default.createElement(CustomCell, { text: '111-222-3333', subtext: 'Home' }), key: 'PHONE_NUMBER' })
      ),
      _react2.default.createElement(
        _terraTable2.default.Row,
        { isSelectable: true, key: 'PERSON_1' },
        _react2.default.createElement(_terraTable2.default.Cell, { content: _react2.default.createElement(CustomCell, { text: 'Jane Smith', subtext: 'Super Cool Person' }), key: 'NAME' }),
        _react2.default.createElement(_terraTable2.default.Cell, { content: _react2.default.createElement(CustomCell, { text: '321 Drive Street', subtext: 'Kansas' }), key: 'ADDRESS' }),
        _react2.default.createElement(_terraTable2.default.Cell, { content: _react2.default.createElement(CustomCell, { text: '111-222-3333', subtext: 'Cell' }), key: 'PHONE_NUMBER' })
      ),
      _react2.default.createElement(
        _terraTable2.default.Row,
        { isSelectable: true, key: 'PERSON_2' },
        _react2.default.createElement(_terraTable2.default.Cell, { content: _react2.default.createElement(CustomCell, { text: 'Dave Smith', subtext: 'Not Super Cool At All' }), key: 'NAME' }),
        _react2.default.createElement(_terraTable2.default.Cell, { content: _react2.default.createElement(CustomCell, { text: '213 Raymond Road', subtext: 'Alaska' }), key: 'ADDRESS' }),
        _react2.default.createElement(_terraTable2.default.Cell, { content: _react2.default.createElement(CustomCell, { text: '111-222-3333', subtext: 'Work' }), key: 'PHONE_NUMBER' })
      )
    )
  );
};

exports.default = TableWithCustomCells;