'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconEdit = require('terra-icon/lib/icon/IconEdit');

var _IconEdit2 = _interopRequireDefault(_IconEdit);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = _react2.default.createElement(_IconEdit2.default, null);
var buttonStyle = { margin: '5px' };

var ButtonCompact = function ButtonCompact() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraButton2.default, { text: 'Compact', isCompact: true, style: buttonStyle }),
    _react2.default.createElement(_terraButton2.default, { icon: Icon, text: 'icon', isCompact: true, style: buttonStyle }),
    _react2.default.createElement(_terraButton2.default, { icon: Icon, isCompact: true, style: buttonStyle })
  );
};

exports.default = ButtonCompact;