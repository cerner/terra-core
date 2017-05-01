import moment from 'moment';

class DateUtil {
  static createSafeMoment(date, format) {
    if (date && format) {
      const momentDate = moment(date, format);
      return momentDate.isValid() ? momentDate : date;
    }

    return date;
  }

  static filterSafeMoments(dates, format) {
    const momentDates = [];

    if (dates) {
      let index = 0;
      for (index = 0; index < dates.length; index += 1) {
        const momentDate = moment(dates[index], format);
        if (momentDate.isValid()) {
          momentDates.push(momentDate);
        }
      }
    }

    return momentDates.length > 0 ? momentDates : dates;
  }
}

export default DateUtil;
