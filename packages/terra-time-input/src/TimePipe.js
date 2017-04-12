export default function createAutoCorrectedTimePipe(timeFormat = 'HH:mm') {
  return function processConformedValue(conformedValue) {
    const indexesOfPipedChars = [];
    const timeFormatArray = timeFormat.split(/[^Hm]+/);
    const maxValue = { HH: 23, mm: 59 };
    const minValue = { HH: 0, mm: 0 };
    const conformedValueArr = conformedValue.split('');

    // Check first digit
    timeFormatArray.forEach((format) => {
      const position = timeFormat.indexOf(format);
      const maxFirstDigit = parseInt(maxValue[format].toString().substr(0, 1), 10);

      if (parseInt(conformedValueArr[position], 10) > maxFirstDigit) {
        conformedValueArr[position + 1] = conformedValueArr[position];
        conformedValueArr[position] = 0;
        indexesOfPipedChars.push(position);
      }
    });

    // Check for invalid time
    const isInvalid = timeFormatArray.some((format) => {
      const position = timeFormat.indexOf(format);
      const length = format.length;
      const textValue = conformedValue.substr(position, length).replace(/\D/g, '');
      const value = parseInt(textValue, 10);

      return value > maxValue[format] || (textValue.length === length && value < minValue[format]);
    });

    if (isInvalid) {
      return false;
    }

    return {
      value: conformedValueArr.join(''),
      indexesOfPipedChars,
    };
  };
}
