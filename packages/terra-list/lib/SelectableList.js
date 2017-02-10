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
  isMultiselect: _react.PropTypes.bool
};

var defaultProps = {
  items: [],
  isDivided: false,
  hasChevrons: true,
  isMultiselect: false
};

var SelectableList = function (_React$Component) {
  _inherits(SelectableList, _React$Component);

  _createClass(SelectableList, null, [{
    key: 'processItemSelection',
    value: function processItemSelection(items, indexes) {
      return items.map(function (item, index) {
        var newSelected = indexes.includes(index);
        var newProps = {};

        if (newSelected !== item.isSelected) {
          newProps.isSelected = newSelected;
        }

        return _react2.default.cloneElement(item, newProps);
      });
    }
  }, {
    key: 'selectedIndexesFromItems',
    value: function selectedIndexesFromItems(items, isMultiselect) {
      var selectedIndexes = items.map(function (item, index) {
        if (item.props.isSelected) {
          return index;
        }
        return false;
      });

      return isMultiselect ? selectedIndexes : [selectedIndexes[0]];
    }
  }, {
    key: 'shouldUpdateIndexes',
    value: function shouldUpdateIndexes(indexes) {
      if (indexes.length !== this.state.selectedIndexes.length) {
        return true;
      }

      for (var i = indexes.length - 1; i >= 0; i -= 1) {
        if (this.state.selectedIndexes.includes(indexes[i]) !== true) {
          return true;
        }
      }

      return false;
    }
  }]);

  function SelectableList(props) {
    _classCallCheck(this, SelectableList);

    var _this = _possibleConstructorReturn(this, (SelectableList.__proto__ || Object.getPrototypeOf(SelectableList)).call(this, props));

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.state = { selectedIndexes: SelectableList.selectedIndexesFromItems(_this.props.items, _this.props.isMultiselect) };
    return _this;
  }

  _createClass(SelectableList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextIndexes = SelectableList.selectedIndexesFromItems(nextProps.items, nextProps.isMultiselect);

      if (SelectableList.shouldUpdateIndexes(nextIndexes)) {
        this.setState({ selectedIndexes: nextIndexes });
      }
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick(event, index) {
      var newIndexes = [];
      if (this.props.isMultiselect && this.state.selectedIndexes.length) {
        if (this.state.selectedIndexes.includes(index)) {
          newIndexes = this.state.selectedIndexes.slice();
          newIndexes.splice(newIndexes.indexOf(index), 1);
        } else {
          newIndexes = this.state.selectedIndexes.concat([index]);
        }
      } else {
        newIndexes.push(index);
      }

      if (SelectableList.shouldUpdateIndexes(newIndexes)) {
        this.setState({ selectedIndexes: newIndexes });
      }
    }
  }, {
    key: 'wrapOnClicks',
    value: function wrapOnClicks(items) {
      var _this2 = this;

      return items.map(function (item) {
        var previousBlock = item.props.onClick;
        var referenceThis = _this2;
        var wrappedBlock = function wrappedBlock(event, index) {
          referenceThis.handleOnClick(event, index);

          if (previousBlock) {
            previousBlock(event);
          }
        };
        var newProps = { onClick: wrappedBlock };

        return _react2.default.cloneElement(item, newProps);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          isDivided = _props.isDivided,
          hasChevrons = _props.hasChevrons,
          customProps = _objectWithoutProperties(_props, ['items', 'isDivided', 'hasChevrons']);

      var itemsWithSelection = SelectableList.processItemSelection(items, this.state.selectedIndexes);

      return _react2.default.createElement(_List2.default, _extends({
        items: itemsWithSelection,
        itemsSelectable: true,
        isDivided: isDivided,
        hasChevrons: hasChevrons
      }, customProps));
    }
  }]);

  return SelectableList;
}(_react2.default.Component);

SelectableList.propTypes = propTypes;
SelectableList.defaultProps = defaultProps;

exports.default = SelectableList;