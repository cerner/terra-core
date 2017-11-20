class TimeUtil {
  /**
   * Finds the equivalent twelve hour time and meridiem for a given hour, anteMeridiem, and postMeridiem
   * @param {String} hour Hour to parse.
   * @param {String} anteMeridiem String representation of the anteMeridiem.
   * @param {String} postMeridiem String representation of the postMeridiem.
   * @return {{hourString: string., meridiem: string}} Hour and meridiem associated to the passed in variables.
   *   Hour will be in 2 digit format.
   */
  static parseTwelveHourTime(hour, anteMeridiem, postMeridiem) {
    const parsedHour = { hourString: hour };
    let numericHour = parseInt(hour, 10);

    if (numericHour >= 12) {
      parsedHour.meridiem = postMeridiem;

      if (numericHour > 12) {
        numericHour -= 12;
      }
    } else {
      parsedHour.meridiem = anteMeridiem;

      if (numericHour === 0) {
        numericHour = 12;
      }
    }

    if (numericHour < 10) {
      parsedHour.hourString = '0'.concat(numericHour.toString());
    } else {
      parsedHour.hourString = numericHour.toString();
    }

    return parsedHour;
  }

  static incrementHour(stateValue, timeVariant) {
    const maxValue = timeVariant === this.FORMAT_12_HOUR ? 12 : 23;

    // Increment the value by 1 when arrow up is pressed.
    if (stateValue) {
      let numericMinute = Number(stateValue);

      if (numericMinute < maxValue) {
        numericMinute += 1;
        return numericMinute < 10 ? '0'.concat(numericMinute.toString()) : numericMinute.toString();
      } else if (timeVariant === this.FORMAT_12_HOUR) {
        return '01';
      }

      return stateValue;
    }

    return timeVariant === this.FORMAT_12_HOUR ? '12' : '00';
  }

  static decrementHour(stateValue, timeVariant) {
    const minValue = timeVariant === this.FORMAT_12_HOUR ? 1 : 0;

    if (stateValue) {
      let numericMinute = Number(stateValue);

      if (numericMinute > minValue) {
        numericMinute -= 1;
        return numericMinute < 10 ? '0'.concat(numericMinute.toString()) : numericMinute.toString();
      } else if (timeVariant === this.FORMAT_12_HOUR) {
        return '12';
      }
    }

    return timeVariant === this.FORMAT_12_HOUR ? '12' : '00';
  }

  static incrementMinute(stateValue) {
    if (stateValue) {
      let numericMinute = Number(stateValue);

      if (numericMinute < 59) {
        numericMinute += 1;
        return numericMinute < 10 ? '0'.concat(numericMinute.toString()) : numericMinute.toString();
      }

      return stateValue;
    }

    return '00';
  }

  static decrementMinute(stateValue) {
    if (stateValue) {
      let numericMinute = Number(stateValue);

      if (numericMinute > 0) {
        numericMinute -= 1;
        return numericMinute < 10 ? '0'.concat(numericMinute.toString()) : numericMinute.toString();
      }

      return stateValue;
    }

    return '00';
  }

  static splitHour(time) {
    if (typeof (time) === 'string') {
      const hourAndMinute = time.split(':');

      if (hourAndMinute.length) {
        const hour = Number(hourAndMinute[0]);
        if (hour >= 0 && hour < 24) {
          if (hourAndMinute[0].length === 1) {
            return '0'.concat(hourAndMinute[0]);
          }

          return hourAndMinute[0];
        }
      }

      return '';
    }

    return '';
  }

  static splitMinute(time) {
    if (typeof (time) === 'string') {
      const hourAndMinute = time.split(':');

      if (hourAndMinute.length > 1) {
        const minute = Number(hourAndMinute[1]);
        if (minute >= 0 && minute < 60) {
          if (hourAndMinute[1].length === 1) {
            return '0'.concat(hourAndMinute[1]);
          }

          return hourAndMinute[1];
        }
      }

      return '';
    }

    return '';
  }
}

Object.defineProperty(TimeUtil, 'FORMAT_12_HOUR', {
  value: '12',
  configurable: false,
  enumerable: true,
  writable: false,
});

Object.defineProperty(TimeUtil, 'FORMAT_24_HOUR', {
  value: '24',
  configurable: false,
  enumerable: true,
  writable: false,
});

export default TimeUtil;
