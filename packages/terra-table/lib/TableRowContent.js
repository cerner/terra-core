'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  display: _react.PropTypes.any.isRequired,
  height: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge'])
};

var TableRowContent = function TableRowContent(_ref) {
  var display = _ref.display,
      height = _ref.height,
      customProps = _objectWithoutProperties(_ref, ['display', 'height']);

  var contentClassName = (0, _classnames2.default)([_defineProperty({}, 'terra-Table-height-' + height, height), 'terra-Table-content']);
  return _react2.default.createElement(
    'td',
    customProps,
    _react2.default.createElement(
      'div',
      { className: contentClassName },
      display
    )
  );
};

TableRowContent.propTypes = propTypes;

exports.default = TableRowContent;