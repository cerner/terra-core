'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  display: _react.PropTypes.any.isRequired,
  /**
   * The maximum height for the cell content in a table
   */
  height: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge'])
};

var TableRowContent = function TableRowContent(_ref) {
  var display = _ref.display,
      height = _ref.height,
      customProps = _objectWithoutProperties(_ref, ['display', 'height']);

  var heightProperty = {
    'data-max-height': height
  };
  return _react2.default.createElement(
    'td',
    _extends({}, heightProperty, customProps),
    _react2.default.createElement(
      'div',
      null,
      display
    )
  );
};

TableRowContent.propTypes = propTypes;

exports.default = TableRowContent;