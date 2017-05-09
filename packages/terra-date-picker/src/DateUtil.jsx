import moment from 'moment';

class DateUtil {

  // Converts an ISO 8601 date into a moment object. If the date is invalid and unable to convert, the originally provided date is returned.
  static createSafeDate(date, format) {
    if (date && format) {
      const momentDate = moment(date, format);
      return momentDate.isValid() ? momentDate : date;
    }

    return date;
  }

  // Filters out any invalid dates in the provided list of dates and returns a list of moment objects representation of the valid dates
  static filterInvalidDates(dates, format) {
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
