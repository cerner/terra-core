'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./baseStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The component(s) that will be wrapped by `<Base />`.
   */
  children: _react.PropTypes.node.isRequired
};

var Base = function Base(_ref) {
  var children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'div',
    customProps,
    children
  );
};

Base.propTypes = propTypes;

exports.default = Base;