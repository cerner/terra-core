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

export default TimeUtil;
