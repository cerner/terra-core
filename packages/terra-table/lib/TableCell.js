'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  content: _react.PropTypes.any.isRequired,
  /**
   * The maximum height for the cell content in a table
   */
  height: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge'])
};

var TableCell = function TableCell(_ref) {
  var content = _ref.content,
      height = _ref.height,
      customProps = _objectWithoutProperties(_ref, ['content', 'height']);

  var contentClassName = (0, _classnames2.default)([_defineProperty({}, 'terra-Table-row-max-height--' + height, height), 'terra-Table-cell', customProps.className]);

  return _react2.default.createElement(
    'td',
    _extends({}, customProps, { className: contentClassName }),
    _react2.default.createElement(
      'div',
      null,
      content
    )
  );
};

TableCell.propTypes = propTypes;

exports.default = TableCell;