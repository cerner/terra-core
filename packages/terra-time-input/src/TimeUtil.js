class TimeUtil {
  static splitHour(time) {
    if (typeof (time) === 'string') {
      const hourAndMinute = time.split(':');

      if (hourAndMinute.length) {
        const hour = Number(hourAndMinute[0]);
        if (hour >= 0 && hour < 24) {
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
          return hourAndMinute[1];
        }
      }

      return '';
    }

    return '';
  }
}

export default TimeUtil;
