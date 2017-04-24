'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: _react.PropTypes.func,
  /**
   * The onInputClick callback function from react-datepicker to show the picker when clicked.
   */
  onClick: _react.PropTypes.func,
  /**
   * The onInputKeyDown callback function from react-datepicker to handle keyboard navigation.
   */
  onKeyDown: _react.PropTypes.func,
  /**
   * The placeholder text to display in the date input.
   */
  placeholder: _react.PropTypes.string,
  /**
   * The selected or entered date value to display in the date input.
   */
  value: _react.PropTypes.string
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
        _react2.default.createElement('input', {
          className: 'terra-DatePicker-input',
          type: 'text',
          value: this.props.value,
          onChange: this.props.onChange,
          placeholder: this.props.placeholder
        }),
        _react2.default.createElement(_terraButton2.default, {
          className: 'terra-DatePicker-button',
          onClick: this.props.onClick,
          onKeyDown: this.props.onKeyDown,
          icon: Icon
        })
      );
    }
  }]);

  return DatePickerInput;
}(_react2.default.Component);

DatePickerInput.propTypes = propTypes;

exports.default = DatePickerInput;