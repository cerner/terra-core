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

var _README = require('terra-modal/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-modal/package.json');

var _Modal = require('!raw-loader!terra-modal/src/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalIsOpened = require('./ModalIsOpened');

var _ModalIsOpened2 = _interopRequireDefault(_ModalIsOpened);

var _ModalCloseOnOutsideClick = require('./ModalCloseOnOutsideClick');

var _ModalCloseOnOutsideClick2 = _interopRequireDefault(_ModalCloseOnOutsideClick);

var _ModalIsFullscreen = require('./ModalIsFullscreen');

var _ModalIsFullscreen2 = _interopRequireDefault(_ModalIsFullscreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
var ModalExamples = function ModalExamples() {
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
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props-table', src: _Modal2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'isOpened' },
      'Default Modal'
    ),
    _react2.default.createElement(_ModalIsOpened2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'closeOnOutsideClick' },
      'Disable closing the modal when clicking on the overlay'
    ),
    _react2.default.createElement(_ModalCloseOnOutsideClick2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'isFullscreen' },
      'Fullscreen Modal'
    ),
    _react2.default.createElement(_ModalIsFullscreen2.default, null)
  );
};

// Example Files
exports.default = ModalExamples;