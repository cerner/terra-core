export default function TimePipe(timeFormat = 'HH:mm') {
  return function processConformedValue(conformedValue) {
    const timeFormatArray = timeFormat.split(/[^Hm]+/);
    const maxValue = { HH: 23, mm: 59 };
    const minValue = { HH: 0, mm: 0 };

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
      value: conformedValue,
      indexesOfPipedChars: [],
    };
  };
}
