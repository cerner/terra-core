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

var _README = require('terra-icon/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-icon/package.json');

var _IconBase = require('!raw-loader!terra-icon/src/IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

var _IconStatic = require('./IconStatic');

var _IconStatic2 = _interopRequireDefault(_IconStatic);

var _IconThemeable = require('./IconThemeable');

var _IconThemeable2 = _interopRequireDefault(_IconThemeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Example Files
var IconExamples = function IconExamples() {
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
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _IconBase2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'static_icons' },
      'Static Icons'
    ),
    _react2.default.createElement(_IconStatic2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      { id: 'themeable_icons' },
      'Themeable Icons'
    ),
    _react2.default.createElement(_IconThemeable2.default, null)
  );
};

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
exports.default = IconExamples;