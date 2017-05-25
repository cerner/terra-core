'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('terra-base/lib/baseStyles');

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _IconCalendar = require('terra-icon/lib/icon/IconCalendar');

var _IconCalendar2 = _interopRequireDefault(_IconCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = _react2.default.createElement(_IconCalendar2.default, null);

var propTypes = {
  /**
   * Custom input attributes to apply to the date input.
   */
  inputAttributes: _propTypes2.default.object,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: _propTypes2.default.func,
  /**
   * The onInputClick callback function from react-datepicker to show the picker when clicked.
   */
  onClick: _propTypes2.default.func,
  /**
   * The onInputKeyDown callback function from react-datepicker to handle keyboard navigation.
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * The placeholder text to display in the date input.
   */
  placeholder: _propTypes2.default.string,
  /**
   * The selected or entered date value to display in the date input.
   */
  value: _propTypes2.default.string
};

// eslint-disable-next-line react/prefer-stateless-function

var DatePickerInput = function (_React$Component) {
  _inherits(DatePickerInput, _React$Component);

  function DatePickerInput() {
    _classCallCheck(this, DatePickerInput);

    return _possibleConstructorReturn(this, (DatePickerInput.__proto__ || Object.getPrototypeOf(DatePickerInput)).apply(this, arguments));
  }

  _createClass(DatePickerInput, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'terra-DatePicker-customInput' },
        _react2.default.createElement('input', _extends({}, this.props.inputAttributes, { // TODO: When forms is available, this.props.inputAttributes should be passed to the attrs props in the TextField component (attrs={this.props.inputAttributes}) instead of destructuring the inputAttributes prop here.
          className: 'terra-DatePicker-input',
          type: 'text',
          value: this.props.value,
          onChange: this.props.onChange,
          placeholder: this.props.placeholder
        })),
        _react2.default.createElement(_terraButton2.default, {
          className: 'terra-DatePicker-button',
          onClick: this.props.onClick,
          onKeyDown: this.props.onKeyDown,
          icon: Icon,
          type: 'button'
        })
      );
    }
  }]);

  return DatePickerInput;
}(_react2.default.Component);

DatePickerInput.propTypes = propTypes;

exports.default = DatePickerInput;