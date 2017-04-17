'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableRows = require('./TableRows');

var _TableRows2 = _interopRequireDefault(_TableRows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYCODES = {
  ENTER: 13
};

var propTypes = {
  /**
   * The children passed to the component
   */
  children: _react.PropTypes.node,
  /**
   * The maximum height for all the rows in a table
   */
  height: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * A callback function for onClick action
   */
  onClick: _react.PropTypes.func,
  /**
  * A callback function for onKeyDown action for tab key
  */
  onKeyDown: _react.PropTypes.func
};

var defaultProps = {
  onClick: undefined,
  onKeyDown: undefined
};

var SingleSelectableRows = function (_React$Component) {
  _inherits(SingleSelectableRows, _React$Component);

  _createClass(SingleSelectableRows, null, [{
    key: 'selectedRowIndex',
    value: function selectedRowIndex(rows) {
      // Find the first row which is selected and is selectable
      for (var i = 0; i < rows.length; i += 1) {
        if (rows[i].props.isSelected === true && rows[i].props.isSelectable !== false) {
          return i;
        }
      }
      return -1;
    }
  }]);

  function SingleSelectableRows(props) {
    _classCallCheck(this, SingleSelectableRows);

    var _this = _possibleConstructorReturn(this, (SingleSelectableRows.__proto__ || Object.getPrototypeOf(SingleSelectableRows)).call(this, props));

    _this.handleSelection = _this.handleSelection.bind(_this);
    _this.shouldHandleSelection = _this.shouldHandleSelection.bind(_this);
    _this.state = { selectedIndex: SingleSelectableRows.selectedRowIndex(_this.props.children) };
    return _this;
  }

  _createClass(SingleSelectableRows, [{
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
    key: 'wrappedOnClickForRow',
    value: function wrappedOnClickForRow(row, index) {
      var _this2 = this;

      var initialOnClick = this.props.onClick;

      return function (event) {
        if (row.props.isSelectable !== false && _this2.shouldHandleSelection(index)) {
          _this2.handleSelection(event, index);
        }

        if (initialOnClick) {
          initialOnClick(event);
        }
      };
    }
  }, {
    key: 'wrappedOnKeyDownForRow',
    value: function wrappedOnKeyDownForRow(row, index) {
      var _this3 = this;

      var initialOnKeyDown = this.props.onKeyDown;

      return function (event) {
        if (event.nativeEvent.keyCode === KEYCODES.ENTER) {
          if (row.props.isSelectable !== false && _this3.shouldHandleSelection(index)) {
            _this3.handleSelection(event, index);
          }
        }

        if (initialOnKeyDown) {
          initialOnKeyDown(event);
        }
      };
    }
  }, {
    key: 'newPropsForRow',
    value: function newPropsForRow(row, index, onClick, onKeyDown) {
      var isSelected = this.state.selectedIndex === index;

      var newProps = { onClick: onClick, onKeyDown: onKeyDown };

      // set the isSelected attribute to false for all the rows except the row whose index is set to state selectedIndex
      // This will ensure that only one row will be selected at a moment of time.
      if (isSelected !== row.props.isSelected) {
        newProps.isSelected = isSelected;
      }

      var isSelectable = row.props.isSelectable;
      // By default isSelectable attribute for the TableRow is undefined, as this is selectable table,
      // we will make row selectable by default. If consumer specify the row attribute isSelectable as false,
      // then row will not be selectable
      if (isSelectable === undefined) {
        newProps.isSelectable = true;
      }

      // Add tabIndex on rows to navigate through keyboard tab key for selectable row
      if (newProps.isSelectable || isSelectable) {
        newProps.tabIndex = '0';
      }

      return newProps;
    }
  }, {
    key: 'clonedChildItems',
    value: function clonedChildItems(rows) {
      var _this4 = this;

      return rows.map(function (row, index) {
        var wrappedOnClick = _this4.wrappedOnClickForRow(row, index);
        var wrappedOnKeyDown = _this4.wrappedOnKeyDownForRow(row, index);
        var newProps = _this4.newPropsForRow(row, index, wrappedOnClick, wrappedOnKeyDown);
        return _react2.default.cloneElement(row, newProps);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          height = _props.height,
          customProps = _objectWithoutProperties(_props, ['children', 'height']);

      var clonedChilItems = this.clonedChildItems(children);
      if ('onClick' in customProps) {
        delete customProps.onClick;
      }
      if ('onKeyDown' in customProps) {
        delete customProps.onKeyDown;
      }
      return _react2.default.createElement(
        _TableRows2.default,
        _extends({ height: height }, customProps),
        clonedChilItems
      );
    }
  }]);

  return SingleSelectableRows;
}(_react2.default.Component);

SingleSelectableRows.propTypes = propTypes;
SingleSelectableRows.defaultProps = defaultProps;

exports.default = SingleSelectableRows;