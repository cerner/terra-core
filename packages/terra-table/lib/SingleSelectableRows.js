'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('terra-base/lib/baseStyles');

var _TableRows = require('./TableRows');

var _TableRows2 = _interopRequireDefault(_TableRows);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

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
  children: _propTypes2.default.node,
  /**
   * A callback function for onChange action
   */
  onChange: _propTypes2.default.func
};

var defaultProps = {
  onChange: undefined
};

var SingleSelectableRows = function (_React$Component) {
  _inherits(SingleSelectableRows, _React$Component);

  _createClass(SingleSelectableRows, null, [{
    key: 'selectedRowIndex',
    value: function selectedRowIndex(rows) {
      // Find the first row which is selected and is selectable
      for (var i = 0; i < rows.length; i += 1) {
        if (rows[i].props.isSelected && rows[i].props.isSelectable) {
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
      if (this.props.onChange) {
        this.props.onChange(event);
      }
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

      var initialOnClick = row.props.onClick;

      return function (event) {
        if (_this2.shouldHandleSelection(index)) {
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

      var initialOnKeyDown = row.props.onKeyDown;

      return function (event) {
        if (event.nativeEvent.keyCode === KEYCODES.ENTER) {
          if (_this3.shouldHandleSelection(index)) {
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
      var newProps = {};

      // set the isSelected attribute to false for all the rows except the row whose index is set to state selectedIndex
      // This will ensure that only one row will be selected at a moment of time.
      if (isSelected !== row.props.isSelected) {
        newProps.isSelected = isSelected;
      }

      newProps.isSelectable = row.props.isSelectable;

      // If selectable, add tabIndex on rows to navigate through keyboard tab key for selectable row and add
      // onClick and onKeyDown functions.
      if (newProps.isSelectable) {
        newProps.tabIndex = '0';
        newProps.onClick = onClick;
        newProps.onKeyDown = onKeyDown;
      }

      return newProps;
    }
  }, {
    key: 'clonedChildItems',
    value: function clonedChildItems(rows) {
      var _this4 = this;

      return rows.map(function (row, index) {
        if (row.type === _TableRow2.default) {
          var wrappedOnClick = _this4.wrappedOnClickForRow(row, index);
          var wrappedOnKeyDown = _this4.wrappedOnKeyDownForRow(row, index);
          var newProps = _this4.newPropsForRow(row, index, wrappedOnClick, wrappedOnKeyDown);
          return _react2.default.cloneElement(row, newProps);
        }
        return row;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          customProps = _objectWithoutProperties(_props, ['children']);

      var clonedChildItems = this.clonedChildItems(children);
      if ('onChange' in customProps) {
        delete customProps.onChange;
      }
      return _react2.default.createElement(
        _TableRows2.default,
        customProps,
        clonedChildItems
      );
    }
  }]);

  return SingleSelectableRows;
}(_react2.default.Component);

SingleSelectableRows.propTypes = propTypes;
SingleSelectableRows.defaultProps = defaultProps;

exports.default = SingleSelectableRows;