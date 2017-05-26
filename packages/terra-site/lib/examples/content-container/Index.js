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

var _README = require('terra-content-container/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _ContentContainer = require('!raw-loader!terra-content-container/src/ContentContainer.jsx');

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _ContentContainerStandard = require('./ContentContainerStandard');

var _ContentContainerStandard2 = _interopRequireDefault(_ContentContainerStandard);

var _ContentContainerFill = require('./ContentContainerFill');

var _ContentContainerFill2 = _interopRequireDefault(_ContentContainerFill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Example Files
var ContentContainerExamples = function ContentContainerExamples() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraMarkdown2.default, { id: 'readme', src: _README2.default }),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _ContentContainer2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'standard' },
      'Standard Container'
    ),
    _react2.default.createElement(_ContentContainerStandard2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'outline-variant' },
      'Fill Container'
    ),
    _react2.default.createElement(_ContentContainerFill2.default, null)
  );
};
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
/* eslint-disable import/no-extraneous-dependencies */
exports.default = ContentContainerExamples;