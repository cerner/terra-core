/* eslint-disable no-underscore-dangle */
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

  // Checks if a given date is out of the range between the start and end dates.
  static isDateOutOfRange(sourceDate, startDate, endDate) {
    if (!sourceDate || !sourceDate.isValid()
      || !startDate || !startDate.isValid()
      || !endDate || !endDate.isValid()) {
      return false;
    }

    if (sourceDate.isSameOrAfter(startDate) && sourceDate.isSameOrBefore(endDate)) {
      return false;
    }

    return true;
  }

  // Checks if a given date is one of the excluded dates.
  static isDateExcluded(sourceDate, excludedDates) {
    if (!sourceDate || !sourceDate.isValid()) {
      return false;
    }

    const excludeMomentDates = DateUtil.filterInvalidDates(excludedDates);

    if (excludeMomentDates) {
      for (let index = 0; index < excludeMomentDates.length; index += 1) {
        if (sourceDate.isSame(excludeMomentDates[index], 'day')) {
          return true;
        }
      }
    }

    return false;
  }

  // Converts date string to the ISO8601 format with only the date part. If the date string is invalid and unable to convert, the originally provided string is returned.
  static convertToISO8601(date, format) {
    if (date && format) {
      const momentDate = moment(date, format, true);
      return momentDate.isValid() ? momentDate.format('YYYY-MM-DD') : date;
    }

    return date;
  }

  // Gets the long date format based on the locale.
  static getFormatByLocale(locale) {
    if (locale) {
      const localMoment = moment();
      localMoment.locale(locale);
      return localMoment.localeData()._longDateFormat.L;
    }

    return undefined;
  }
}

export default DateUtil;
