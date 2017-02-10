'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../src/list-item.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  content: _react.PropTypes.element,
  isSelected: _react.PropTypes.bool,
  isSelectable: _react.PropTypes.bool,
  hasChevron: _react.PropTypes.bool
};

var defaultProps = {
  content: undefined,
  isSelected: false,
  isSelectable: false,
  hasChevron: false
};

var ListItem = function (_React$Component) {
  _inherits(ListItem, _React$Component);

  _createClass(ListItem, null, [{
    key: 'classesForListItemFromProps',
    value: function classesForListItemFromProps(isSelected, isSelectable, hasChevron) {
      return (0, _classnames2.default)(['terra-ListItem', { 'terra-ListItem--selected': isSelected }, // use aria-selected?
      { 'terra-ListItem-selectable': isSelectable }, { 'terra-ListItem-chevron': hasChevron }]);
    }
  }]);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          content = _props.content,
          isSelected = _props.isSelected,
          isSelectable = _props.isSelectable,
          hasChevron = _props.hasChevron,
          customProps = _objectWithoutProperties(_props, ['content', 'isSelected', 'isSelectable', 'hasChevron']);

      var listItemClasses = ListItem.classesForListItemFromProps(isSelected, isSelectable, hasChevron);
      var listItemClassNames = (0, _classnames2.default)([listItemClasses, customProps.className]);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: listItemClassNames }),
        content
      );
    }
  }]);

  return ListItem;
}(_react2.default.Component);

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

exports.default = ListItem;