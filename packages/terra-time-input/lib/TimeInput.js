'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactTextMask = require('react-text-mask');

var _reactTextMask2 = _interopRequireDefault(_reactTextMask);

var _TimePipe = require('./TimePipe');

var _TimePipe2 = _interopRequireDefault(_TimePipe);

require('./TimeInput.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * A moment object to use as the default initial time.
   */
  defaultTime: _react.PropTypes.object,
  /**
  * A callback function to execute when a time value is entered.
  */
  onChange: _react.PropTypes.func
};

var defaultProps = {
  defaultTime: null,
  onChange: null
};

var TimeInput = function (_React$Component) {
  _inherits(TimeInput, _React$Component);

  _createClass(TimeInput, null, [{
    key: 'userLocale',
    value: function userLocale() {
      // TODO: Get the locale from i18nProvider
      return 'en-US';
    }
  }, {
    key: 'timeFormat',
    value: function timeFormat() {
      // TODO: Get the time format translation.
      return 'HH:mm';
    }
  }, {
    key: 'formattedTime',
    value: function formattedTime(timeMoment) {
      if (timeMoment) {
        return timeMoment.clone().locale(TimeInput.userLocale()).format(TimeInput.timeFormat());
      }

      return '';
    }
  }]);

  function TimeInput(props) {
    _classCallCheck(this, TimeInput);

    var _this = _possibleConstructorReturn(this, (TimeInput.__proto__ || Object.getPrototypeOf(TimeInput)).call(this, props));

    _this.state = {
      defaultTime: TimeInput.formattedTime(_this.props.defaultTime),
      value: TimeInput.formattedTime(_this.props.defaultTime)
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleInputKeyDown = _this.handleInputKeyDown.bind(_this);
    return _this;
  }

  _createClass(TimeInput, [{
    key: 'handleChange',
    value: function handleChange(event) {
      if (event.target.value === this.state.value) {
        return;
      }

      this.setState({
        value: event.target.value
      });

      if (this.props.onChange) {
        this.props.onChange(event);
      }
    }
  }, {
    key: 'handleInputKeyDown',
    value: function handleInputKeyDown(event) {
      var momentTime = (0, _moment2.default)(this.state.value, TimeInput.timeFormat(), true);

      if (!momentTime.isValid()) {
        return;
      }

      if (event.key === 'ArrowUp') {
        this.setState({ value: TimeInput.formattedTime(momentTime.add(1, 'minutes')) });
      } else if (event.key === 'ArrowDown') {
        this.setState({ value: TimeInput.formattedTime(momentTime.subtract(1, 'minutes')) });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultTime = _props.defaultTime,
          onChange = _props.onChange,
          customProps = _objectWithoutProperties(_props, ['defaultTime', 'onChange']);

      return _react2.default.createElement(
        'div',
        { className: 'terra-TimeInput' },
        _react2.default.createElement(_reactTextMask2.default, _extends({}, customProps, {
          className: 'terra-TimeInput-input',
          type: 'text',
          value: this.state.value,
          defaultValue: this.state.defaultTime,
          onChange: this.handleChange,
          placeholder: TimeInput.timeFormat(),
          mask: [/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/],
          keepCharPositions: true,
          placeholderChar: ' ',
          pipe: (0, _TimePipe2.default)(TimeInput.timeFormat()),
          onKeyDown: this.handleInputKeyDown
        }))
      );
    }
  }]);

  return TimeInput;
}(_react2.default.Component);

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;

exports.default = TimeInput;