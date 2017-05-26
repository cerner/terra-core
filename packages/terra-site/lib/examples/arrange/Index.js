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

var _README = require('terra-arrange/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-arrange/package.json');

var _Arrange = require('!raw-loader!terra-arrange/src/Arrange');

var _Arrange2 = _interopRequireDefault(_Arrange);

var _examplesetup = require('./examplesetup');

var _ArrangeAlignment = require('./ArrangeAlignment');

var _ArrangeAlignment2 = _interopRequireDefault(_ArrangeAlignment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Example Files
var ArrangeExamples = function ArrangeExamples() {
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
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _Arrange2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'align-all' },
      'Align All Containers'
    ),
    _react2.default.createElement(_ArrangeAlignment2.default, { alignment: 'all', fitStart: _examplesetup.image, fill: _examplesetup.simpleText }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ArrangeAlignment2.default, { alignment: 'all', fill: _examplesetup.simpleText, fitEnd: _examplesetup.icon }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ArrangeAlignment2.default, { alignment: 'all', fitStart: _examplesetup.image, fill: _examplesetup.simpleText, fitEnd: _examplesetup.icon }),
    _react2.default.createElement(
      'h2',
      { id: 'align-individual' },
      'Align Individual Containers'
    ),
    _react2.default.createElement(_ArrangeAlignment2.default, { alignment: 'individual', fitStart: _examplesetup.image, fill: _examplesetup.simpleText }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ArrangeAlignment2.default, { alignment: 'individual', fill: _examplesetup.simpleText, fitEnd: _examplesetup.icon }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ArrangeAlignment2.default, { alignment: 'individual', fitStart: _examplesetup.image, fill: _examplesetup.simpleText, fitEnd: _examplesetup.icon })
  );
};

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
exports.default = ArrangeExamples;