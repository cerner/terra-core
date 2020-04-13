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
    } else if (current.childOptions) {
      const foundValue = getDisplay(findValue, current.childOptions);
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
    const firstValue = getFirstValue(current.childOptions);
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

export default {
  defaultPlaceholderValue,
  isCurrentPlaceholder,
  getDisplay,
  getFirstValue,
};

export {
  defaultPlaceholderValue,
  isCurrentPlaceholder,
  getDisplay,
  getFirstValue,
};
