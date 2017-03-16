'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonGroupButton = require('./ButtonGroupButton');

var _ButtonGroupButton2 = _interopRequireDefault(_ButtonGroupButton);

require('./ButtonGroup.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  onChange: _react.PropTypes.func,
  intent: _react.PropTypes.oneOf(['default', 'secondary']),
  size: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  compact: _react.PropTypes.bool,
  selectable: _react.PropTypes.bool,
  buttons: _react.PropTypes.arrayOf(_react.PropTypes.shape({ type: _react.PropTypes.oneOf([_ButtonGroupButton2.default]) })),
  children: _react.PropTypes.node
};

var defaultProps = {
  buttons: [],
  children: []
};

var ButtonGroup = function (_React$Component) {
  _inherits(ButtonGroup, _React$Component);

  _createClass(ButtonGroup, null, [{
    key: 'getInitialState',
    value: function getInitialState(buttons, selectable) {
      if (!selectable) {
        return null;
      }

      for (var i = 0; i < buttons.length; i += 1) {
        if (buttons[i].props.isSelected) {
          return i;
        }
      }

      return null;
    }
  }]);

  function ButtonGroup(props) {
    _classCallCheck(this, ButtonGroup);

    var _this = _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).call(this, props));

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.state = {
      selectedIndex: ButtonGroup.getInitialState(_this.props.buttons.concat(_this.props.children), _this.props.selectable)
    };
    return _this;
  }

  _createClass(ButtonGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var newState = ButtonGroup.getInitialState(nextProps.buttons.concat(nextProps.children), nextProps.selectable);

      if (newState !== this.state.selectedIndex) {
        this.setState({ selectedIndex: newState });
      }
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick(event, index) {
      // No need to re-render if the button clicked is already selected
      if (this.state.selectedIndex === index) {
        this.setState({ selectedIndex: index });

        if (this.props.onChange) {
          this.props.onChange(this.state.selectedIndex);
        }
      }
    }
  }, {
    key: 'wrapOnClick',
    value: function wrapOnClick(item, index) {
      var _this2 = this;

      var onClick = item.props.onClick;
      return function (event) {
        _this2.handleOnClick(event, index);

        if (onClick) {
          onClick(event);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          selectable = _props.selectable,
          buttons = _props.buttons,
          children = _props.children,
          extraProps = _objectWithoutProperties(_props, ['selectable', 'buttons', 'children']);

      extraProps.className = (0, _classnames2.default)(['terra-ButtonGroup', extraProps.className]);

      var allButtons = buttons.concat(children);

      allButtons = allButtons.map(function (button, i) {
        return _react2.default.cloneElement(button, {
          onClick: _this3.wrapOnClick(button, i),
          isSelected: _this3.state.selectedIndex === i,
          size: _this3.props.size,
          intent: _this3.props.intent,
          compact: _this3.props.compact
        });
      });

      return _react2.default.createElement(
        'div',
        extraProps,
        allButtons
      );
    }
  }]);

  return ButtonGroup;
}(_react2.default.Component);

ButtonGroup.propTypes = propTypes;

ButtonGroup.defaultProps = defaultProps;

ButtonGroup.Button = _ButtonGroupButton2.default;

exports.default = ButtonGroup;