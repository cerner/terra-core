'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alignOptions = exports.alignLabels = exports.IconWrapper = exports.ArrangeWrapper = exports.textWithPadding = exports.simpleText = exports.image = exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconAlert = require('terra-icon/lib/icon/IconAlert');

var _IconAlert2 = _interopRequireDefault(_IconAlert);

var _panda = require('../../assets/panda.jpg');

var _panda2 = _interopRequireDefault(_panda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icon = _react2.default.createElement(_IconAlert2.default, { width: '4em', height: '4em' });
// Block style is required since images are inline by default. This could be resolved by someones normalize.css
var image = _react2.default.createElement('img', { style: { display: 'block' }, height: '100', width: '150', src: _panda2.default, alt: 'a happy panda' });
var ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
var simpleText = _react2.default.createElement(
  'div',
  null,
  ipsum
);
var textWithPadding = _react2.default.createElement(
  'div',
  { style: { paddingLeft: '10px', paddingRight: '10px', border: '1px solid red' } },
  ipsum
);

var ArrangeWrapper = function ArrangeWrapper(props) {
  return _react2.default.createElement(
    'div',
    { style: { width: '500px', border: '1px solid black' } },
    props.children
  );
};

ArrangeWrapper.propTypes = {
  children: _propTypes2.default.element
};

var IconWrapper = function IconWrapper(props) {
  return _react2.default.createElement(
    'div',
    { style: { backgroundColor: '#ff5722', height: '100%' } },
    props.children
  );
};

IconWrapper.propTypes = {
  children: _propTypes2.default.element
};

var alignLabels = {
  overall: 'Overall Alignment: ',
  alignFitStart: 'Fit Start Alignment: ',
  alignFitEnd: 'Fit End Alignment: ',
  alignFill: 'Fill Alignment: '
};

var alignOptions = {
  center: 'center',
  bottom: 'bottom',
  stretch: 'stretch'
};

exports.icon = icon;
exports.image = image;
exports.simpleText = simpleText;
exports.textWithPadding = textWithPadding;
exports.ArrangeWrapper = ArrangeWrapper;
exports.IconWrapper = IconWrapper;
exports.alignLabels = alignLabels;
exports.alignOptions = alignOptions;