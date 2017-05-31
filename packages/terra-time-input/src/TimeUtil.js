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
}

export default TimeUtil;
