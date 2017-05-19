'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateUtil = function () {
  function DateUtil() {
    _classCallCheck(this, DateUtil);
  }

  _createClass(DateUtil, null, [{
    key: 'createSafeDate',


    // Converts an ISO 8601 date into a moment object. If the date is invalid and unable to convert, the originally provided date is returned.
    value: function createSafeDate(date, format) {
      if (date && format) {
        var momentDate = (0, _moment2.default)(date, format);
        return momentDate.isValid() ? momentDate : date;
      }

      return date;
    }

    // Filters out any invalid dates in the provided list of dates and returns a list of moment objects representation of the valid dates

  }, {
    key: 'filterInvalidDates',
    value: function filterInvalidDates(dates, format) {
      var momentDates = [];

      if (dates) {
        var index = 0;
        for (index = 0; index < dates.length; index += 1) {
          var momentDate = (0, _moment2.default)(dates[index], format);
          if (momentDate.isValid()) {
            momentDates.push(momentDate);
          }
        }
      }

      return momentDates.length > 0 ? momentDates : dates;
    }
  }]);

  return DateUtil;
}();

exports.default = DateUtil;