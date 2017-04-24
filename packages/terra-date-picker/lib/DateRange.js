'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('terra-base/lib/baseStyles');

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * A moment object to use as the default end date for a date range.
   */
  endDate: _react.PropTypes.oneOfType([_react.PropTypes.object]),
  /**
   * A moment object to use as the default start date for a date range.
   */
  startDate: _react.PropTypes.oneOfType([_react.PropTypes.object]),
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: _react.PropTypes.func
};

var DateRange = function (_React$Component) {
  _inherits(DateRange, _React$Component);

  function DateRange(props) {
    _classCallCheck(this, DateRange);

    var _this = _possibleConstructorReturn(this, (DateRange.__proto__ || Object.getPrototypeOf(DateRange)).call(this, props));

    _this.state = {
      startDate: props.startDate,
      endDate: props.endDate
    };
    _this.handleChangeStart = _this.handleChangeStart.bind(_this);
    _this.handleChangeEnd = _this.handleChangeEnd.bind(_this);
    return _this;
  }

  _createClass(DateRange, [{
    key: 'handleChange',
    value: function handleChange(_ref) {
      var _ref$startDate = _ref.startDate,
          startDate = _ref$startDate === undefined ? this.state.startDate : _ref$startDate,
          _ref$endDate = _ref.endDate,
          endDate = _ref$endDate === undefined ? this.state.endDate : _ref$endDate;

      var startDateForRange = startDate;
      var endDateForRange = endDate;

      if (startDateForRange.isAfter(endDateForRange)) {
        var _ref2 = [endDateForRange, startDateForRange];
        startDateForRange = _ref2[0];
        endDateForRange = _ref2[1];
      }

      this.setState({ startDate: startDateForRange, endDate: endDateForRange });

      if (this.props.onChange) {
        this.props.onChange(startDateForRange, endDateForRange);
      }
    }
  }, {
    key: 'handleChangeStart',
    value: function handleChangeStart(startDate) {
      this.handleChange({ startDate: startDate });
    }
  }, {
    key: 'handleChangeEnd',
    value: function handleChangeEnd(endDate) {
      this.handleChange({ endDate: endDate });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'terra-DatePicker-range' },
        _react2.default.createElement(_DatePicker2.default, _extends({}, this.props, {
          selectedDate: this.state.startDate,
          isStartDateRange: true,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          onChange: this.handleChangeStart
        })),
        _react2.default.createElement(_DatePicker2.default, _extends({}, this.props, {
          selectedDate: this.state.endDate,
          isEndDateRange: true,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          onChange: this.handleChangeEnd
        }))
      );
    }
  }]);

  return DateRange;
}(_react2.default.Component);

DateRange.propTypes = propTypes;

exports.default = DateRange;