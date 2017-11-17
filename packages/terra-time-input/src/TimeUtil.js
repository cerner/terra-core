class TimeUtil {
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
