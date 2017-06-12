import moment from 'moment';

class TimeUtil {
  static formattedTime(time, format) {
    if (time && format) {
      const momentTime = moment(time, format, true);
      if (momentTime.isValid()) {
        return momentTime.format(format);
      }
    }

    return '';
  }

  static parseHourFromTime(time) {
    const formattedTime = TimeUtil.formattedTime(time, 'HH:mm');
    return TimeUtil.splitHour(formattedTime);
  }

  static parseMinuteFromTime(time) {
    const formattedTime = TimeUtil.formattedTime(time, 'HH:mm');
    return TimeUtil.splitMinute(formattedTime);
  }

  static splitHour(time) {
    if (typeof (time) === 'string') {
      const hourAndMinute = time.split(':');

      return hourAndMinute.length > 0 ? hourAndMinute[0] : '';
    }

    return '';
  }

  static splitMinute(time) {
    if (typeof (time) === 'string') {
      const hourAndMinute = time.split(':');

      return hourAndMinute.length > 1 ? hourAndMinute[1] : '';
    }

    return '';
  }

  // Given a time (expected to be in local time) and converts it to a UTC time.
  static createUTCTimeFromLocalTime(time) {
    const momentTime = moment(time, 'HH:mm', true);
    if (momentTime.isValid()) {
      return momentTime.utc().format('HH:mm').concat('Z');
    }

    return time;
  }
}

export default TimeUtil;
