import moment from 'moment-timezone';

class DateTimeUtils {
  static createSafeDate(date) {
    if (!date || (date && date.length === 0)) {
      return null;
    }

    const momentDate = moment(date);
    return momentDate.isValid() ? momentDate : null;
  }

  // Check if the iSODate contains the time part.
  // The time part in a valid ISO 8601 string is separated from the date part either by a space or 'T'.
  static hasTime(iSODate) {
    if (!DateTimeUtils.createSafeDate(iSODate)) {
      return false;
    }

    let timePart = '';

    if (iSODate.indexOf(' ') > 0) {
      // eslint-disable-next-line prefer-destructuring
      timePart = iSODate.split(' ')[1];
    }

    if (iSODate.indexOf('T') > 0) {
      // eslint-disable-next-line prefer-destructuring
      timePart = iSODate.split('T')[1];
    }

    return timePart.length > 0;
  }

  static formatISODateTime(iSODate, format) {
    if (!iSODate || iSODate.length <= 0) {
      return '';
    }

    const momentDate = moment(iSODate);
    return DateTimeUtils.formatMomentDateTime(momentDate, format);
  }

  static formatMomentDateTime(momentDate, format) {
    return momentDate && momentDate.isValid() ? momentDate.format(format) : undefined;
  }

  static syncDateTime(momentDate, iOSdate, time) {
    const date = moment(iOSdate);
    let newDate = momentDate ? momentDate.clone() : date;

    // If momentDate was null, a new moment date needs to be created and sync'd with the entered time.
    if (momentDate === null && time && time.length === 5) {
      newDate = DateTimeUtils.updateTime(newDate, time);
    }

    return newDate.year(date.get('year')).month(date.get('month')).date(date.get('date'));
  }

  static updateTime(momentDate, time) {
    if (!momentDate || !momentDate.isValid()) {
      return null;
    }

    const newDate = momentDate.clone();
    const date = moment(time, 'HH:mm', true);

    return newDate.hour(date.get('hour')).minute(date.get('minute'));
  }

  static isValidDateTime(date, time, format) {
    return DateTimeUtils.isValidDate(date, format) && DateTimeUtils.isValidTime(time);
  }

  static isValidDate(date, format) {
    const dateMoment = moment(date, format, true);
    return dateMoment.isValid();
  }

  static isValidTime(time) {
    const timeMoment = moment(time, 'HH:mm', true);
    return timeMoment.isValid();
  }

  static checkAmbiguousTime(dateTime) {
    if (!dateTime || !dateTime.isValid()) {
      return false;
    }

    const localizedDateTime = moment.tz(dateTime.format(), moment.tz.guess());
    const beforeDaylightSaving = localizedDateTime.clone();
    const afterDaylightSaving = localizedDateTime.clone();

    // The localizedDateTime could be before or after the time change (e.g. the offset is -500 or -600 in CST)
    // To determine if this is the ambiguous hour, we need to add 1 hour as well as subtract 1 hour to account for both directions.
    beforeDaylightSaving.add(1, 'hour');
    afterDaylightSaving.subtract(1, 'hour');

    const isAmbiguousBeforeChange = localizedDateTime.isDST() && !beforeDaylightSaving.isDST();
    const isAmbiguousAfterChange = !localizedDateTime.isDST() && afterDaylightSaving.isDST();

    return isAmbiguousBeforeChange || isAmbiguousAfterChange;
  }

  static getDaylightSavingTZDisplay() {
    return moment('2017-07-01').tz(moment.tz.guess()).format('z');
  }

  static getStandardTZDisplay() {
    return moment('2017-01-01').tz(moment.tz.guess()).format('z');
  }
}

export default DateTimeUtils;
