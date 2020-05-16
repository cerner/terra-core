const defaultPlaceholderValue = '-invalid-value-';

const getDisplay = (findValue, options, placeholder, intl) => {
  if (placeholder) {
    if ((placeholder.value && findValue === placeholder.value) || (!placeholder.value && findValue === defaultPlaceholderValue)) {
      return placeholder.display || intl.formatMessage({ id: 'Terra.form.select.defaultDisplay' });
    }
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

const getFirstValue = (options, placeholder) => {
  if (placeholder) {
    return placeholder.value || defaultPlaceholderValue;
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

const isCurrentPlaceholder = (value, placeholder) => {
  if (!placeholder) {
    return false;
  }
  if (placeholder.value) {
    return value === placeholder.value;
  }
  return value === defaultPlaceholderValue;
};

const getOptGroupKey = (display, index) => `${display}-${index}`;

const geOptGroupKeyIndex = (display, currentKeys, index = 0) => {
  if (currentKeys.indexOf(getOptGroupKey(display, index)) >= 0) {
    return geOptGroupKeyIndex(display, currentKeys, index + 1);
  }
  return index;
};

export default {
  defaultPlaceholderValue,
  isCurrentPlaceholder,
  getDisplay,
  getFirstValue,
  getOptGroupKey,
  geOptGroupKeyIndex,
};

export {
  defaultPlaceholderValue,
  isCurrentPlaceholder,
  getDisplay,
  getFirstValue,
  getOptGroupKey,
  geOptGroupKeyIndex,
};
