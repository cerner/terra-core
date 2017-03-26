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
  onClick: _react.PropTypes.func,
  /**
   * The class to put on th tag
   */
  className: _react.PropTypes.string
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
      className = _ref.className,
      customProps = _objectWithoutProperties(_ref, ['display', 'height', 'minWidth', 'sort', 'className']);

  var contentClassName = (0, _classnames2.default)(['terra-Table-header', className]);

  var ascSortInd = (0, _classnames2.default)(['terra-Table-sort-indicator', { 'terra-Table-hidden': sort !== 'asc' }]);

  var descSortInd = (0, _classnames2.default)(['terra-Table-sort-indicator', { 'terra-Table-hidden': sort !== 'desc' }]);

  if (height) {
    customProps['data-max-height'] = height;
  }

  return _react2.default.createElement(
    'th',
    _extends({ className: contentClassName, 'data-column-min-width': minWidth }, customProps),
    _react2.default.createElement(
      'div',
      null,
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