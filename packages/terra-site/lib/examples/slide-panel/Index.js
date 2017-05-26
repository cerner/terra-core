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

var _README = require('terra-slide-panel/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-slide-panel/package.json');

var _SlidePanel = require('!raw-loader!terra-slide-panel/src/SlidePanel');

var _SlidePanel2 = _interopRequireDefault(_SlidePanel);

var _SlidePanelOverlay = require('./SlidePanelOverlay');

var _SlidePanelOverlay2 = _interopRequireDefault(_SlidePanelOverlay);

var _SlidePanelSquish = require('./SlidePanelSquish');

var _SlidePanelSquish2 = _interopRequireDefault(_SlidePanelSquish);

var _SlidePanelStart = require('./SlidePanelStart');

var _SlidePanelStart2 = _interopRequireDefault(_SlidePanelStart);

var _SlidePanelEnd = require('./SlidePanelEnd');

var _SlidePanelEnd2 = _interopRequireDefault(_SlidePanelEnd);

var _SlidePanelSmall = require('./SlidePanelSmall');

var _SlidePanelSmall2 = _interopRequireDefault(_SlidePanelSmall);

var _SlidePanelLarge = require('./SlidePanelLarge');

var _SlidePanelLarge2 = _interopRequireDefault(_SlidePanelLarge);

var _SlidePanelFullscreen = require('./SlidePanelFullscreen');

var _SlidePanelFullscreen2 = _interopRequireDefault(_SlidePanelFullscreen);

var _SlidePanelFill = require('./SlidePanelFill');

var _SlidePanelFill2 = _interopRequireDefault(_SlidePanelFill);

var _SlidePanelNoFill = require('./SlidePanelNoFill');

var _SlidePanelNoFill2 = _interopRequireDefault(_SlidePanelNoFill);

var _SlidePanelDemo = require('./SlidePanelDemo');

var _SlidePanelDemo2 = _interopRequireDefault(_SlidePanelDemo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Example Files
var SlidePanelExamples = function SlidePanelExamples() {
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
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _SlidePanel2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'stateful' },
      'Stateful Demo'
    ),
    _react2.default.createElement(_SlidePanelDemo2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'overlay' },
      'Behavior - Overlay'
    ),
    _react2.default.createElement(_SlidePanelOverlay2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'squish' },
      'Behavior - Squish'
    ),
    _react2.default.createElement(_SlidePanelSquish2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'start' },
      'Position - Start'
    ),
    _react2.default.createElement(_SlidePanelStart2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'end' },
      'Position - End'
    ),
    _react2.default.createElement(_SlidePanelEnd2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'small' },
      'Size - Small'
    ),
    _react2.default.createElement(_SlidePanelSmall2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'large' },
      'Size - Large'
    ),
    _react2.default.createElement(_SlidePanelLarge2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'fullscreen' },
      'Fullscreen'
    ),
    _react2.default.createElement(_SlidePanelFullscreen2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'fill' },
      'Fill'
    ),
    _react2.default.createElement(_SlidePanelFill2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'no-fill' },
      'Fill Off'
    ),
    _react2.default.createElement(_SlidePanelNoFill2.default, null)
  );
};

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
exports.default = SlidePanelExamples;