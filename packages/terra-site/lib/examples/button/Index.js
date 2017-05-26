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

var _README = require('terra-button/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-button/package.json');

var _Button = require('!raw-loader!terra-button/src/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonSize = require('./ButtonSize');

var _ButtonSize2 = _interopRequireDefault(_ButtonSize);

var _ButtonBlock = require('./ButtonBlock');

var _ButtonBlock2 = _interopRequireDefault(_ButtonBlock);

var _ButtonAnchor = require('./ButtonAnchor');

var _ButtonAnchor2 = _interopRequireDefault(_ButtonAnchor);

var _ButtonDisabled = require('./ButtonDisabled');

var _ButtonDisabled2 = _interopRequireDefault(_ButtonDisabled);

var _ButtonOnClick = require('./ButtonOnClick');

var _ButtonOnClick2 = _interopRequireDefault(_ButtonOnClick);

var _ButtonIcon = require('./ButtonIcon');

var _ButtonIcon2 = _interopRequireDefault(_ButtonIcon);

var _ButtonVariant = require('./ButtonVariant');

var _ButtonVariant2 = _interopRequireDefault(_ButtonVariant);

var _ButtonCompact = require('./ButtonCompact');

var _ButtonCompact2 = _interopRequireDefault(_ButtonCompact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Example Files
var ButtonExamples = function ButtonExamples() {
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
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _Button2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'variant' },
      'Variant'
    ),
    _react2.default.createElement(_ButtonVariant2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'compact' },
      'Compact'
    ),
    _react2.default.createElement(_ButtonCompact2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'size' },
      'Size'
    ),
    _react2.default.createElement(_ButtonSize2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'block' },
      'Block'
    ),
    _react2.default.createElement(_ButtonBlock2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'anchor' },
      'Anchor'
    ),
    _react2.default.createElement(_ButtonAnchor2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'disabled' },
      'Disabled'
    ),
    _react2.default.createElement(_ButtonDisabled2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'on-click' },
      'OnClick'
    ),
    _react2.default.createElement(_ButtonOnClick2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'icon' },
      'Icon'
    ),
    _react2.default.createElement(_ButtonIcon2.default, null)
  );
};

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
exports.default = ButtonExamples;