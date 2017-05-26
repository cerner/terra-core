'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconEdit = require('terra-icon/lib/icon/IconEdit');

var _IconEdit2 = _interopRequireDefault(_IconEdit);

var _IconAdd = require('terra-icon/lib/icon/IconAdd');

var _IconAdd2 = _interopRequireDefault(_IconAdd);

var _terraButtonGroup = require('terra-button-group');

var _terraButtonGroup2 = _interopRequireDefault(_terraButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconEdit = _react2.default.createElement(_IconEdit2.default, null);
var iconAdd = _react2.default.createElement(_IconAdd2.default, null);

var ButtonGroupWithIcons = function ButtonGroupWithIcons() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButtonGroup2.default, {
        buttons: [_react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Icon', icon: iconEdit, key: 'iconDefault1' }), _react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Icon', icon: iconAdd, key: 'iconDefault2' })]
      })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButtonGroup2.default, {
        buttons: [_react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Icon Reversed', icon: iconEdit, isReversed: true, key: 'iconReversed1' }), _react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Icon Reversed', icon: iconAdd, isReversed: true, key: 'iconReversed2' })]
      })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButtonGroup2.default, {
        buttons: [_react2.default.createElement(_terraButtonGroup2.default.Button, { icon: iconEdit, key: 'iconOnly1' }), _react2.default.createElement(_terraButtonGroup2.default.Button, { icon: iconAdd, key: 'iconOnly2' })]
      })
    )
  );
};

exports.default = ButtonGroupWithIcons;