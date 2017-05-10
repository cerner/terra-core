import moment from 'moment';

class TimeUtil {
  static formattedTime(time, format) {
    if (time && format) {
      const momentTime = moment(time, format, true);
      if (momentTime.isValid()) {
        return momentTime.format(format);
      }
    }

    return undefined;
  }
}

export default TimeUtil;
