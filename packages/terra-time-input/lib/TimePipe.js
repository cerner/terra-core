'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAutoCorrectedTimePipe;
function createAutoCorrectedTimePipe() {
  var timeFormat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'HH:mm';

  return function processConformedValue(conformedValue) {
    var indexesOfPipedChars = [];
    var timeFormatArray = timeFormat.split(/[^Hm]+/);
    var maxValue = { HH: 23, mm: 59 };
    var minValue = { HH: 0, mm: 0 };
    var conformedValueArr = conformedValue.split('');

    // Check first digit
    timeFormatArray.forEach(function (format) {
      var position = timeFormat.indexOf(format);
      var maxFirstDigit = parseInt(maxValue[format].toString().substr(0, 1), 10);

      if (parseInt(conformedValueArr[position], 10) > maxFirstDigit) {
        conformedValueArr[position + 1] = conformedValueArr[position];
        conformedValueArr[position] = 0;
        indexesOfPipedChars.push(position);
      }
    });

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
      value: conformedValueArr.join(''),
      indexesOfPipedChars: indexesOfPipedChars
    };
  };
}