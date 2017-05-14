'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('terra-base/lib/baseStyles');

var _Fieldset = require('./Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/label-has-for */

var propTypes = {
  /**
   * Children to pass into the fieldset
   */
  children: _react.PropTypes.node,
  /**
   * The property name for the choice object used to set the choice label
   */
  choiceName: _react.PropTypes.string,
  /**
   * The property name for the choice object used to set the choice value
   */
  choiceValue: _react.PropTypes.string,
  /**
   * Error message for when the input is invalid
   */
  error: _react.PropTypes.node,
  /**
   *  Help element to display with the input
   */
  help: _react.PropTypes.node,
  /**
   * Whether the field is inline
   */
  isInline: _react.PropTypes.bool,
  /**
   * Label of the input
   */
  legend: _react.PropTypes.node,
  /**
   * Name of the input attribute
   */
  name: _react.PropTypes.string,
  /**
   * Function to trigger when user selects one of the radio buttons
   */
  onChange: _react.PropTypes.func,
  /**
   * Initial Value of the input
   */
  value: _react.PropTypes.string
};

var defaultProps = {
  children: null,
  choices: [],
  choiceName: 'name',
  choiceValue: 'value',
  error: null,
  help: null,
  isInline: false,
  legend: null,
  name: null,
  onChange: function onChange() {},
  value: undefined
};

var childContextTypes = {
  radioGroup: _react.PropTypes.any
};

var RadioGroup = function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup() {
    _classCallCheck(this, RadioGroup);

    return _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).apply(this, arguments));
  }

  _createClass(RadioGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        radioGroup: {
          onChange: this.props.onChange,
          name: this.props.name
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          error = _props.error,
          help = _props.help,
          legend = _props.legend,
          isInline = _props.isInline,
          customProps = _objectWithoutProperties(_props, ['error', 'help', 'legend', 'isInline']);

      return _react2.default.createElement(
        _Fieldset2.default,
        _extends({
          error: error,
          legend: legend,
          help: help,
          isInline: isInline
        }, customProps),
        this.props.children
      );
    }
  }]);

  return RadioGroup;
}(_react2.default.Component);

RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
RadioGroup.childContextTypes = childContextTypes;

exports.default = RadioGroup;