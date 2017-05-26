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

var _README = require('terra-button-group/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-button-group/package.json');

var _ButtonGroup = require('!raw-loader!terra-button-group/src/ButtonGroup.jsx');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _ButtonGroupButton = require('!raw-loader!terra-button-group/src/ButtonGroupButton.jsx');

var _ButtonGroupButton2 = _interopRequireDefault(_ButtonGroupButton);

var _ButtonGroupVariant = require('./ButtonGroupVariant');

var _ButtonGroupVariant2 = _interopRequireDefault(_ButtonGroupVariant);

var _ButtonGroupSize = require('./ButtonGroupSize');

var _ButtonGroupSize2 = _interopRequireDefault(_ButtonGroupSize);

var _ButtonGroupCompact = require('./ButtonGroupCompact');

var _ButtonGroupCompact2 = _interopRequireDefault(_ButtonGroupCompact);

var _ButtonGroupSelectable = require('./ButtonGroupSelectable');

var _ButtonGroupSelectable2 = _interopRequireDefault(_ButtonGroupSelectable);

var _ButtonGroupWithIcons = require('./ButtonGroupWithIcons');

var _ButtonGroupWithIcons2 = _interopRequireDefault(_ButtonGroupWithIcons);

var _ButtonGroupOnClick = require('./ButtonGroupOnClick');

var _ButtonGroupOnClick2 = _interopRequireDefault(_ButtonGroupOnClick);

var _ButtonGroupOnChange = require('./ButtonGroupOnChange');

var _ButtonGroupOnChange2 = _interopRequireDefault(_ButtonGroupOnChange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var ButtonGroupExamples = function ButtonGroupExamples() {
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
      'Button Group'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _ButtonGroup2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Button Group Button'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'button-props', src: _ButtonGroupButton2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Variant'
    ),
    _react2.default.createElement(_ButtonGroupVariant2.default, null),
    _react2.default.createElement(
      'h2',
      null,
      'Size'
    ),
    _react2.default.createElement(_ButtonGroupSize2.default, null),
    _react2.default.createElement(
      'h2',
      null,
      'Compact'
    ),
    _react2.default.createElement(_ButtonGroupCompact2.default, null),
    _react2.default.createElement(
      'h2',
      null,
      'Icons'
    ),
    _react2.default.createElement(_ButtonGroupWithIcons2.default, null),
    _react2.default.createElement(
      'h2',
      null,
      'Unselectable With On Click Set'
    ),
    _react2.default.createElement(_ButtonGroupOnClick2.default, null),
    _react2.default.createElement(
      'h2',
      null,
      'Selectable'
    ),
    _react2.default.createElement(_ButtonGroupSelectable2.default, null),
    _react2.default.createElement(
      'h2',
      null,
      'On Change'
    ),
    _react2.default.createElement(_ButtonGroupOnChange2.default, null)
  );
};
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
// Examples

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
exports.default = ButtonGroupExamples;