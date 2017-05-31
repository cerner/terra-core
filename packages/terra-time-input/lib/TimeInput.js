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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

var _Input = require('terra-form/lib/Input');

var _Input2 = _interopRequireDefault(_Input);

var _TimeUtil = require('./TimeUtil');

var _TimeUtil2 = _interopRequireDefault(_TimeUtil);

require('./TimeInput.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * Custom input attributes to apply to the time input.
   */
  inputAttributes: _propTypes2.default.object,
  /**
  * A callback function to execute when a time value is entered.
  */
  onChange: _propTypes2.default.func,
  /**
   * An ISO 8601 string representation of the time value in the input.
   */
  value: _propTypes2.default.string
};

var defaultProps = {
  inputAttributes: undefined,
  onChange: null,
  value: undefined
};

var inputType = {
  HOUR: 0,
  MINUTE: 1
};

var acceptableKeyCodes = {
  BACKSPACE: 8,
  TAB: 9,
  ARROWLEFT: 37,
  ARROWUP: 38,
  ARROWRIGHT: 39,
  ARROWDOWN: 40,
  DELETE: 46,
  DIGIT0: 48,
  DIGIT1: 49,
  DIGIT2: 50,
  DIGIT3: 51,
  DIGIT4: 52,
  DIGIT5: 53,
  DIGIT6: 54,
  DIGIT7: 55,
  DIGIT8: 56,
  DIGIT9: 57
};

var TimeInput = function (_React$Component) {
  _inherits(TimeInput, _React$Component);

  function TimeInput(props) {
    _classCallCheck(this, TimeInput);

    var _this = _possibleConstructorReturn(this, (TimeInput.__proto__ || Object.getPrototypeOf(TimeInput)).call(this, props));

    _this.state = {
      timeFormat: 'hh:mm',
      hour: _TimeUtil2.default.parseHourFromTime(props.value),
      minute: _TimeUtil2.default.parseMinuteFromTime(props.value),
      isFocused: false
    };

    _this.handleHourChange = _this.handleHourChange.bind(_this);
    _this.handleMinuteChange = _this.handleMinuteChange.bind(_this);
    _this.handleHourInputKeyDown = _this.handleHourInputKeyDown.bind(_this);
    _this.handleMinuteInputKeyDown = _this.handleMinuteInputKeyDown.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    return _this;
  }

  _createClass(TimeInput, [{
    key: 'handleFocus',
    value: function handleFocus() {
      this.setState({ isFocused: true });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.setState({ isFocused: false });
    }
  }, {
    key: 'handleHourChange',
    value: function handleHourChange(event) {
      this.handleChange(event, inputType.HOUR);
    }
  }, {
    key: 'handleMinuteChange',
    value: function handleMinuteChange(event) {
      this.handleChange(event, inputType.MINUTE);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event, type) {
      var inputValue = event.target.value;
      var stateValue = type === inputType.HOUR ? this.state.hour : this.state.minute;
      var maxValue = type === inputType.HOUR ? 23 : 59;

      // Ignore the entry if the value did not change or it is invalid.
      if (inputValue === stateValue || Number(inputValue) > maxValue) {
        return;
      }

      // If the change made was not a deletion of a digit,
      // then prepend '0' if the input value is a single digit value between 3 and 9 for hour or 6 and 9 for minute.
      if (inputValue.length >= stateValue.length) {
        var digitsToPrependZero = type === inputType.HOUR ? ['3', '4', '5', '6', '7', '8', '9'] : ['6', '7', '8', '9'];
        if (digitsToPrependZero.indexOf(inputValue) > -1) {
          inputValue = '0'.concat(inputValue);
        }
      }

      if (type === inputType.HOUR) {
        this.setState({ hour: inputValue });
      } else {
        this.setState({ minute: inputValue });
      }

      if (this.props.onChange) {
        var enteredTime = void 0;
        if (type === inputType.HOUR) {
          enteredTime = inputValue.concat(':', this.state.minute);
        } else {
          enteredTime = this.state.hour.concat(':', inputValue);
        }

        this.props.onChange(enteredTime, event);
      }

      // // Move focus to the minute input if the hour input has a valid and complete entry.
      if (type === inputType.HOUR && inputValue.length === 2) {
        this.minuteInput.textInput.focus();
      }
    }
  }, {
    key: 'handleHourInputKeyDown',
    value: function handleHourInputKeyDown(event) {
      this.handleInputKeyDown(event, inputType.HOUR);
    }
  }, {
    key: 'handleMinuteInputKeyDown',
    value: function handleMinuteInputKeyDown(event) {
      this.handleInputKeyDown(event, inputType.MINUTE);
    }
  }, {
    key: 'handleInputKeyDown',
    value: function handleInputKeyDown(event, type) {
      if (Object.values(acceptableKeyCodes).indexOf(event.keyCode) < 0) {
        event.preventDefault();
        return;
      }

      var stateValue = type === inputType.HOUR ? this.state.hour : this.state.minute;
      var maxValue = type === inputType.HOUR ? 23 : 59;
      var updateStateValue = false;

      if (event.keyCode === acceptableKeyCodes.ARROWUP) {
        // Increment the value by 1 when arrow up is pressed.
        if (stateValue) {
          var numericMinute = Number(stateValue);

          if (numericMinute < maxValue) {
            numericMinute += 1;
            if (numericMinute < 10) {
              stateValue = '0'.concat(numericMinute.toString());
            } else {
              stateValue = numericMinute.toString();
            }
            updateStateValue = true;
          }
        } else {
          stateValue = '00';
          updateStateValue = true;
        }
      } else if (event.keyCode === acceptableKeyCodes.ARROWDOWN) {
        // Decrement the value by 1 when arrow down is pressed.
        if (stateValue) {
          var _numericMinute = Number(stateValue);

          if (_numericMinute > 0) {
            _numericMinute -= 1;
            if (_numericMinute < 10) {
              stateValue = '0'.concat(_numericMinute.toString());
            } else {
              stateValue = _numericMinute.toString();
            }
            updateStateValue = true;
          }
        } else {
          stateValue = '00';
          updateStateValue = true;
        }
      } else if (event.keyCode === acceptableKeyCodes.ARROWRIGHT) {
        if (type === inputType.HOUR) {
          // If the hour is empty or the cursor is after the value, move focus to the minute input when the right arrow is pressed.
          if (stateValue.length === 0 || stateValue.length === this.hourInput.textInput.selectionEnd) {
            this.minuteInput.textInput.focus();
            this.minuteInput.textInput.setSelectionRange(0, 0);
            event.preventDefault();
          }
        }
      } else if (event.keyCode === acceptableKeyCodes.ARROWLEFT || event.keyCode === acceptableKeyCodes.DELETE || event.keyCode === acceptableKeyCodes.BACKSPACE) {
        if (type === inputType.MINUTE) {
          // When the DELETE, BACK, or LEFT ARROW key is pressed and tf the cusor is at the left most position in the minute input, is empty or the cursor is before the value, move focus to the hour input when the left arrow is pressed.
          if (this.minuteInput.textInput.selectionEnd === 0) {
            this.hourInput.textInput.focus();
            if (this.state.hour) {
              this.minuteInput.textInput.setSelectionRange(this.state.hour.length, this.state.hour.length);
              event.preventDefault();
            }
          }
        }
      }

      if (updateStateValue) {
        if (type === inputType.HOUR) {
          this.setState({ hour: stateValue });
        } else {
          this.setState({ minute: stateValue });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          inputAttributes = _props.inputAttributes,
          onChange = _props.onChange,
          value = _props.value,
          customProps = _objectWithoutProperties(_props, ['inputAttributes', 'onChange', 'value']);

      var attributes = _extends({}, customProps, inputAttributes);
      var timeInputClassName = (0, _classnames2.default)(['terra-TimeInput', { 'is-focused': this.state.isFocused }, attributes.className]);

      return _react2.default.createElement(
        'div',
        { className: timeInputClassName },
        _react2.default.createElement(_Input2.default, _extends({}, attributes, {
          ref: function ref(inputRef) {
            _this2.hourInput = inputRef;
          },
          className: 'terra-TimeInput-hour',
          type: 'text',
          value: this.state.hour,
          placeholder: _TimeUtil2.default.splitHour(this.state.timeFormat),
          maxLength: '2',
          onChange: this.handleHourChange,
          onKeyDown: this.handleHourInputKeyDown,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        })),
        _react2.default.createElement(
          'span',
          null,
          ':'
        ),
        _react2.default.createElement(_Input2.default, _extends({}, attributes, {
          ref: function ref(inputRef) {
            _this2.minuteInput = inputRef;
          },
          className: 'terra-TimeInput-minute',
          type: 'text',
          value: this.state.minute,
          placeholder: _TimeUtil2.default.splitMinute(this.state.timeFormat),
          maxLength: '2',
          onChange: this.handleMinuteChange,
          onKeyDown: this.handleMinuteInputKeyDown,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }))
      );
    }
  }]);

  return TimeInput;
}(_react2.default.Component);

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;

exports.default = TimeInput;