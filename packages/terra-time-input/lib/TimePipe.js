'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function TimePipe(timeFormat) {
  return function processConformedValue(conformedValue) {
    if (!timeFormat || timeFormat.length < 0) {
      return false;
    }

    var timeFormatArray = timeFormat.split(/[^Hm]+/);
    var maxValue = { HH: 23, mm: 59 };
    var minValue = { HH: 0, mm: 0 };

    // Check for invalid time
    var isInvalid = timeFormatArray.some(function (format) {
      var position = timeFormat.indexOf(format);
      var length = format.length;
      var textValue = conformedValue.substr(position, length).replace(/\D/g, '');
      var value = parseInt(textValue, 10);

      return value > maxValue[format] || textValue.length === length && value < minValue[format];
    });

    if (isInvalid) {
      return false;
    }

    return {
      value: conformedValue,
      indexesOfPipedChars: []
    };
  };
}

exports.default = TimePipe;