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

var _README = require('terra-responsive-element/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-responsive-element/package.json');

var _ResponsiveElement = require('!raw-loader!terra-responsive-element/src/ResponsiveElement');

var _ResponsiveElement2 = _interopRequireDefault(_ResponsiveElement);

var _ResponsiveExample = require('./ResponsiveExample');

var _ResponsiveExample2 = _interopRequireDefault(_ResponsiveExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
var ResponsiveElementExamples = function ResponsiveElementExamples() {
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
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _ResponsiveElement2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Responsive to Parent'
    ),
    _react2.default.createElement(
      'h3',
      null,
      'All Breakpoints'
    ),
    _react2.default.createElement(_ResponsiveExample2.default, {
      defaultElement: _react2.default.createElement(
        'div',
        null,
        'Default'
      ),
      tiny: _react2.default.createElement(
        'div',
        null,
        'Tiny'
      ),
      small: _react2.default.createElement(
        'div',
        null,
        'Small'
      ),
      medium: _react2.default.createElement(
        'div',
        null,
        'Medium'
      ),
      large: _react2.default.createElement(
        'div',
        null,
        'Large'
      ),
      huge: _react2.default.createElement(
        'div',
        null,
        'Huge'
      )
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      null,
      'Default and Medium Breakpoints'
    ),
    _react2.default.createElement(_ResponsiveExample2.default, {
      defaultElement: _react2.default.createElement(
        'div',
        null,
        'Default'
      ),
      medium: _react2.default.createElement(
        'div',
        null,
        'Medium'
      )
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      null,
      'Only Medium'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Note: Does not render elements when smaller than medium.'
    ),
    _react2.default.createElement(_ResponsiveExample2.default, { medium: _react2.default.createElement(
        'div',
        null,
        'Medium'
      ) }),
    _react2.default.createElement(
      'h2',
      null,
      'Responsive to Window'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Note: Changing the container size has no effect when responsive to window. Resize the window to examine changes.'
    ),
    _react2.default.createElement(_ResponsiveExample2.default, {
      responsiveTo: 'window',
      defaultElement: _react2.default.createElement(
        'div',
        null,
        'Default'
      ),
      tiny: _react2.default.createElement(
        'div',
        null,
        'Tiny'
      ),
      small: _react2.default.createElement(
        'div',
        null,
        'Small'
      ),
      medium: _react2.default.createElement(
        'div',
        null,
        'Medium'
      ),
      large: _react2.default.createElement(
        'div',
        null,
        'Large'
      ),
      huge: _react2.default.createElement(
        'div',
        null,
        'Huge'
      )
    })
  );
};

// Example Files
exports.default = ResponsiveElementExamples;