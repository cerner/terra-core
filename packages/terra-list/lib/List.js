'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../src/list.scss');

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  isDivided: _react.PropTypes.bool
};

var defaultProps = {
  className: '',
  children: [],
  isDivided: false
};

var List = function List(_ref) {
  var className = _ref.className,
      children = _ref.children,
      isDivided = _ref.isDivided,
      customProps = _objectWithoutProperties(_ref, ['className', 'children', 'isDivided']);

  var listClassNames = (0, _classnames2.default)(['terra-List', { 'terra-List-divided': isDivided }, className]);

  return _react2.default.createElement(
    'ul',
    _extends({}, customProps, { className: listClassNames }),
    children
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
List.Item = _ListItem2.default;

exports.default = List;