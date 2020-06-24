const defaultPlaceholderValue = '';

const getDisplay = (findValue, options, hasPlaceholder, intl) => {
  if (hasPlaceholder && findValue === defaultPlaceholderValue) {
    return intl.formatMessage({ id: 'Terra.form.select.defaultDisplay' });
  }
  if (!options || !options.length) {
    return undefined;
  }

  for (let i = 0; i < options.length; i += 1) {
    const current = options[i];
    if (current.value) {
      if (current.value === findValue) {
        return current.display;
      }
    } else if (current.options) {
      const foundValue = getDisplay(findValue, current.options);
      if (foundValue) {
        return foundValue;
      }
    }
  }
  return undefined;
};

const getFirstValue = (options, hasPlaceholder = false) => {
  if (hasPlaceholder) {
    return defaultPlaceholderValue;
  }
  if (!options || !options.length) {
    return undefined;
  }
  for (let i = 0; i < options.length; i += 1) {
    const current = options[i];
    if (current.value) {
      return current.value;
    }
    const firstValue = getFirstValue(current.options);
    if (firstValue) {
      return firstValue;
    }
  }
  return undefined;
};

const isCurrentPlaceholder = (value, hasPlaceholder = false) => hasPlaceholder && value === defaultPlaceholderValue;

const isValuePresent = value => value !== undefined && value !== null;

const getOptGroupKey = (display, index) => `${display}-${index}`;

const getOptGroupKeyIndex = (display, currentKeys, index = 0) => {
  if (currentKeys.indexOf(getOptGroupKey(display, index)) >= 0) {
    return getOptGroupKeyIndex(display, currentKeys, index + 1);
  }
  return index;
};

export default {
  defaultPlaceholderValue,
  isCurrentPlaceholder,
  isValuePresent,
  getDisplay,
  getFirstValue,
  getOptGroupKey,
  getOptGroupKeyIndex,
};

export {
  defaultPlaceholderValue,
  isCurrentPlaceholder,
  isValuePresent,
  getDisplay,
  getFirstValue,
  getOptGroupKey,
  getOptGroupKeyIndex,
};
