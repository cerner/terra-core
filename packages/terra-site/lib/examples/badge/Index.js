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

var _README = require('terra-badge/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-badge/package.json');

var _Badge = require('!raw-loader!terra-badge/src/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _BadgeIntent = require('./BadgeIntent');

var _BadgeIntent2 = _interopRequireDefault(_BadgeIntent);

var _BadgeSize = require('./BadgeSize');

var _BadgeSize2 = _interopRequireDefault(_BadgeSize);

var _BadgeIcon = require('./BadgeIcon');

var _BadgeIcon2 = _interopRequireDefault(_BadgeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
var BadgeExamples = function BadgeExamples() {
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
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _Badge2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'default' },
      'Intent'
    ),
    _react2.default.createElement(_BadgeIntent2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'size' },
      'Size'
    ),
    _react2.default.createElement(_BadgeSize2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'icon' },
      'Icon'
    ),
    _react2.default.createElement(_BadgeIcon2.default, null)
  );
};

// Example Files
exports.default = BadgeExamples;