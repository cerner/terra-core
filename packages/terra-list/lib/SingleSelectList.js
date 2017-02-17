'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../src/list.scss');

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  items: _react.PropTypes.arrayOf(_react.PropTypes.element),
  isDivided: _react.PropTypes.bool,
  hasChevrons: _react.PropTypes.bool,
  onSelection: _react.PropTypes.func
};

var defaultProps = {
  items: [],
  isDivided: false,
  hasChevrons: true,
  onSelection: undefined
};

var SingleSelectList = function (_React$Component) {
  _inherits(SingleSelectList, _React$Component);

  _createClass(SingleSelectList, null, [{
    key: 'processItemSelection',
    value: function processItemSelection(items, selectedIndex) {
      return items.map(function (item, index) {
        var newSelected = index === selectedIndex;

        if (newSelected === item.isSelected) {
          return item;
        }

        return _react2.default.cloneElement(item, { isSelected: newSelected });
      });
    }
  }, {
    key: 'selectedIndexFromItems',
    value: function selectedIndexFromItems(items) {
      for (var i = 0; i < items.length; i += 1) {
        if (items[i].props === true) {
          return i;
        }
      }
      return -1;
    }
  }, {
    key: 'propsForItem',
    value: function propsForItem(item, onClick) {
      var newProps = { onClick: onClick };
      if (item.props.isSelectable === undefined) {
        newProps.isSelectable = true;
      } else if (!item.props.isSelectable) {
        newProps = {};
      }

      return newProps;
    }
  }]);

  function SingleSelectList(props) {
    _classCallCheck(this, SingleSelectList);

    var _this = _possibleConstructorReturn(this, (SingleSelectList.__proto__ || Object.getPrototypeOf(SingleSelectList)).call(this, props));

    _this.handleSelection = _this.handleSelection.bind(_this);
    _this.state = { selectedIndex: SingleSelectList.selectedIndexFromItems(_this.props.items) };
    return _this;
  }

  _createClass(SingleSelectList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var index = SingleSelectList.selectedIndexFromItems(nextProps.items, nextProps.isMultiselect);

      if (index !== this.state.selectedIndex) {
        this.setState({ selectedIndexes: index });
      }
    }
  }, {
    key: 'handleSelection',
    value: function handleSelection(event, index) {
      this.setState({ selectedIndex: index });
    }
  }, {
    key: 'shouldHandleSelection',
    value: function shouldHandleSelection(index) {
      return index !== this.state.selectedIndex;
    }
  }, {
    key: 'cloneChildItems',
    value: function cloneChildItems(items) {
      var _this2 = this;

      return items.map(function (item, index) {
        var wrappedOnClick = _this2.wrappedOnClickForItem(item, index);
        var newProps = _this2.newPropsForItem(item, index, wrappedOnClick);

        return _react2.default.cloneElement(item, newProps);
      });
    }
  }, {
    key: 'wrappedOnClickForItem',
    value: function wrappedOnClickForItem(item, index) {
      var initialOnClick = item.props.onClick;
      var referenceThis = this;
      return function (event) {
        if (referenceThis.shouldHandleSelection(index)) {
          referenceThis.handleSelection(event, index);

          if (referenceThis.onSelection) {
            referenceThis.onSelection(event, referenceThis.state.selectedIndexes);
          }
        }

        if (initialOnClick) {
          initialOnClick(event);
        }
      };
    }
  }, {
    key: 'newPropsForItem',
    value: function newPropsForItem(item, index, onClick) {
      var isSelected = this.state.selectedIndex === index;

      var newProps = { onClick: onClick };
      if (isSelected !== item.isSelected) {
        newProps.isSelected = isSelected;
      }

      if (item.props.isSelectable === undefined) {
        newProps.isSelectable = true;
      } else if (!item.props.isSelectable) {
        newProps = {};
      }

      return newProps;
    }
  }, {
    key: 'unusedVariables',
    value: function unusedVariables(variable) {
      return variable === this;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          isDivided = _props.isDivided,
          hasChevrons = _props.hasChevrons,
          onSelection = _props.onSelection,
          customProps = _objectWithoutProperties(_props, ['items', 'isDivided', 'hasChevrons', 'onSelection']);

      var clonedChildItems = this.cloneChildItems(items);

      // Figure out how to handle this scenario.
      this.unusedVariables(onSelection);

      return _react2.default.createElement(_List2.default, _extends({
        items: clonedChildItems,
        isDivided: isDivided,
        hasChevrons: hasChevrons
      }, customProps));
    }
  }]);

  return SingleSelectList;
}(_react2.default.Component);

SingleSelectList.propTypes = propTypes;
SingleSelectList.defaultProps = defaultProps;

exports.default = SingleSelectList;