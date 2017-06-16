import moment from 'moment';

class DateUtil {

  // Converts an ISO 8601 date into a moment object. If the date is invalid and unable to convert, the originally provided date is returned.
  static createSafeDate(date) {
    if (date) {
      const momentDate = moment(date);
      return momentDate.isValid() ? momentDate : date;
    }

    return date;
  }

  // Filters out any invalid dates in the provided list of dates and returns a list of moment objects representation of the valid dates
  static filterInvalidDates(dates) {
    const momentDates = [];

    if (dates) {
      let index = 0;
      for (index = 0; index < dates.length; index += 1) {
        const momentDate = moment(dates[index]);
        if (momentDate.isValid()) {
          momentDates.push(momentDate);
        }
      }
    }

    return momentDates.length > 0 ? momentDates : dates;
  }

  // Converts date string to the ISO8601 format with only the date part. If the date string is invalid and unable to convert, the originally provided string is returned.
  static convertToISO8601(date, format) {
    if (date && format) {
      const momentDate = moment(date, format, true);
      return momentDate.isValid() ? momentDate.format('YYYY-MM-DD') : date;
    }

    return date;
  }
}

export default DateUtil;
