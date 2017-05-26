'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _terraStatus = require('terra-status');

var _terraStatus2 = _interopRequireDefault(_terraStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = _react2.default.createElement('img', { style: { display: 'block' }, height: '150', width: '300', src: 'http://placehold.it/350x150', alt: 'placeholder' }); /* eslint-disable import/no-extraneous-dependencies */

var simpleText = _react2.default.createElement(
  'div',
  { style: { padding: '5px' } },
  'Sample text'
);

var StatusArrange = function StatusArrange() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _terraStatus2.default,
      { color: '#ff0000' },
      _react2.default.createElement(_terraArrange2.default, { fitStart: image, fill: simpleText, alignFill: 'center' })
    )
  );
};

exports.default = StatusArrange;