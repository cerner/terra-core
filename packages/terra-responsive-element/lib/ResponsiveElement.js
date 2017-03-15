'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./ResponsiveElement.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  name: _react.PropTypes.string.isRequired,
  variant: _react.PropTypes.string.isRequired
};

var defaultProps = {
  name: 'default',
  variant: 'terra-ResponsiveElement--default'
};

var ResponsiveElement = function ResponsiveElement(props) {
  return _react2.default.createElement('div', null);
};

ResponsiveElement.propTypes = propTypes;
ResponsiveElement.defaultProps = defaultProps;

exports.default = ResponsiveElement;