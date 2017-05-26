'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraSlidePanel = require('terra-slide-panel');

var _terraSlidePanel2 = _interopRequireDefault(_terraSlidePanel);

var _SlidePanelMainContent = require('./SlidePanelMainContent');

var _SlidePanelMainContent2 = _interopRequireDefault(_SlidePanelMainContent);

var _SlidePanelPanelContent = require('./SlidePanelPanelContent');

var _SlidePanelPanelContent2 = _interopRequireDefault(_SlidePanelPanelContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlidePanelNoFill = function SlidePanelNoFill() {
  return _react2.default.createElement(
    'div',
    { style: { height: '200px', overflow: 'auto' } },
    _react2.default.createElement(_terraSlidePanel2.default, {
      mainContent: _react2.default.createElement(_SlidePanelMainContent2.default, null),
      panelContent: _react2.default.createElement(_SlidePanelPanelContent2.default, null),
      panelBehavior: 'squish',
      panelPosition: 'end',
      panelSize: 'small',
      isOpen: true
    })
  );
};

exports.default = SlidePanelNoFill;