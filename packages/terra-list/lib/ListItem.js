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

var _IconChevronRight = require('terra-icon/lib/icon/IconChevronRight');

var _IconChevronRight2 = _interopRequireDefault(_IconChevronRight);

require('./ListItem.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The content element to be placed inside the list item for display.
   */
  content: _react.PropTypes.element,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  isSelected: _react.PropTypes.bool,
  /**
   * Whether or not the list item should have styles to indicate the item is selectable.
   */
  isSelectable: _react.PropTypes.bool,
  /**
   * Whether or not the list item has a disclosure indicator presented.
   */
  hasChevron: _react.PropTypes.bool
};

var defaultProps = {
  content: undefined,
  isSelected: false,
  isSelectable: false,
  hasChevron: false
};

var ListItem = function ListItem(_ref) {
  var content = _ref.content,
      isSelected = _ref.isSelected,
      isSelectable = _ref.isSelectable,
      hasChevron = _ref.hasChevron,
      customProps = _objectWithoutProperties(_ref, ['content', 'isSelected', 'isSelectable', 'hasChevron']);

  var listItemClassNames = (0, _classnames2.default)(['terra-ListItem', { 'terra-ListItem--selected': isSelected }, { 'terra-ListItem-isSelectable': isSelectable }, { 'terra-ListItem-hasChevron': hasChevron }, customProps.className]);

  var chevron = void 0;
  if (hasChevron) {
    chevron = _react2.default.createElement(
      'span',
      { className: 'terra-ListItem-chevron' },
      _react2.default.createElement(_IconChevronRight2.default, { height: '10', width: '10' })
    );
  }

  return _react2.default.createElement(
    'li',
    _extends({}, customProps, { className: listItemClassNames }),
    content,
    chevron
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

exports.default = ListItem;