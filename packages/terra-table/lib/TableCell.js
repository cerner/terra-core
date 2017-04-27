'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  content: _react.PropTypes.any.isRequired
};

var TableCell = function TableCell(_ref) {
  var content = _ref.content,
      customProps = _objectWithoutProperties(_ref, ['content']);

  var contentClassName = (0, _classnames2.default)(['terra-Table-cell', customProps.className]);

  return _react2.default.createElement(
    'td',
    _extends({}, customProps, { className: contentClassName }),
    content
  );
};

TableCell.propTypes = propTypes;

exports.default = TableCell;