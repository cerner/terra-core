'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconCaretDown = require('terra-icon/lib/icon/IconCaretDown');

var _IconCaretDown2 = _interopRequireDefault(_IconCaretDown);

var _IconCaretUp = require('terra-icon/lib/icon/IconCaretUp');

var _IconCaretUp2 = _interopRequireDefault(_IconCaretUp);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Content to be displayed for the column header
   */
  display: _react.PropTypes.node.isRequired,
  /**
   * The minimum width for the column
   */
  minWidth: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Whether or not data in table is sorted
   */
  sort: _react.PropTypes.oneOf(['asc', 'desc']),
  /**
   * The maximum height for the cell content in a table
   */
  height: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * A callback function for onClick action
   */
  onClick: _react.PropTypes.func
};

var defaultProps = {
  minWidth: 'small'
};

var iconDown = _react2.default.createElement(_IconCaretDown2.default, null);
var iconUp = _react2.default.createElement(_IconCaretUp2.default, null);

var TableHeaderContent = function TableHeaderContent(_ref) {
  var display = _ref.display,
      height = _ref.height,
      minWidth = _ref.minWidth,
      sort = _ref.sort,
      customProps = _objectWithoutProperties(_ref, ['display', 'height', 'minWidth', 'sort']);

  var headerContentClassNames = (0, _classnames2.default)([_defineProperty({}, 'terra-Table-headerHeight-' + height, height), 'terra-Table-content']);

  var contentClassName = (0, _classnames2.default)([_defineProperty({}, 'terra-Table-width-' + minWidth, minWidth)]);

  var ascSortInd = (0, _classnames2.default)([{ 'terra-Table-sort-indicator': sort === 'asc' }, { 'terra-Table-hidden': sort !== 'asc' }]);

  var descSortInd = (0, _classnames2.default)([{ 'terra-Table-sort-indicator': sort === 'desc' }, { 'terra-Table-hidden': sort !== 'desc' }]);

  return _react2.default.createElement(
    'th',
    _extends({ className: contentClassName }, customProps),
    _react2.default.createElement(
      'div',
      { className: headerContentClassNames },
      display,
      _react2.default.createElement(
        'span',
        { className: ascSortInd },
        iconUp
      ),
      _react2.default.createElement(
        'span',
        { className: descSortInd },
        iconDown
      )
    )
  );
};

TableHeaderContent.propTypes = propTypes;
TableHeaderContent.defaultProps = defaultProps;

exports.default = TableHeaderContent;