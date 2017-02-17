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
  items: _react.PropTypes.arrayOf(_react.PropTypes.element),
  isDivided: _react.PropTypes.bool,
  hasChevrons: _react.PropTypes.bool
};

var defaultProps = {
  className: '',
  items: [],
  isDivided: false,
  hasChevrons: false
};

var List = function List(_ref) {
  var className = _ref.className,
      items = _ref.items,
      isDivided = _ref.isDivided,
      hasChevrons = _ref.hasChevrons,
      customProps = _objectWithoutProperties(_ref, ['className', 'items', 'isDivided', 'hasChevrons']);

  var listClassNames = (0, _classnames2.default)(['terra-List', { 'terra-List-divided': isDivided }, { 'terra-List-chevrons': hasChevrons }, className]);

  return _react2.default.createElement(
    'ul',
    _extends({}, customProps, { className: listClassNames }),
    items
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
List.Item = _ListItem2.default;

exports.default = List;