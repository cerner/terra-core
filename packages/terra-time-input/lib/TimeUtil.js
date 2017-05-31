'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeUtil = function () {
  function TimeUtil() {
    _classCallCheck(this, TimeUtil);
  }

  _createClass(TimeUtil, null, [{
    key: 'formattedTime',
    value: function formattedTime(time, format) {
      if (time && format) {
        var momentTime = (0, _moment2.default)(time, format, true);
        if (momentTime.isValid()) {
          return momentTime.format(format);
        }
      }

      return '';
    }
  }, {
    key: 'parseHourFromTime',
    value: function parseHourFromTime(time) {
      var formattedTime = TimeUtil.formattedTime(time, 'HH:mm');
      return TimeUtil.splitHour(formattedTime);
    }
  }, {
    key: 'parseMinuteFromTime',
    value: function parseMinuteFromTime(time) {
      var formattedTime = TimeUtil.formattedTime(time, 'HH:mm');
      return TimeUtil.splitMinute(formattedTime);
    }
  }, {
    key: 'splitHour',
    value: function splitHour(time) {
      if (typeof time === 'string') {
        var hourAndMinute = time.split(':');

        return hourAndMinute.length > 0 ? hourAndMinute[0] : '';
      }

      return '';
    }
  }, {
    key: 'splitMinute',
    value: function splitMinute(time) {
      if (typeof time === 'string') {
        var hourAndMinute = time.split(':');

        return hourAndMinute.length > 1 ? hourAndMinute[1] : '';
      }

      return '';
    }
  }]);

  return TimeUtil;
}();

exports.default = TimeUtil;