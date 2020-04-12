import React from 'react';

const createPlaceholder = placeholder => {
  if (!placeholder) {
    return undefined;
  }
  const display = placeholder.display ? placeholder.display : '- Select -';
  const value = placeholder.value ? placeholder.value : '-invalid-value-';
  const attrs = placeholder.allowClear ? {} : { disabled: true, hidden: true };
  return <option value={value} {...attrs}>{display}</option>;
};

const createOptions = options => options.map(current => {
  if (current.childOptions) {
    return (
      <optgroup label={current.display}>
        {createOptions(current.childOptions)}
      </optgroup>
    );
  }
  return <option value={current.value}>{current.display}</option>;
});

const getDisplay = (findValue, options, placeholder) => {
  if (placeholder) {
    if ((placeholder.value && findValue === placeholder.value) || (!placeholder.value && findValue === '-invalid-value-')) {
      return placeholder.display || '- Select -';
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
    return placeholder.value || '-invalid-value-';
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
  return value === '-invalid-value-'; // default value of placeholder
};

export default {
  createOptions,
  createPlaceholder,
  isCurrentPlaceholder,
  getDisplay,
  getFirstValue,
};

export {
  createOptions,
  createPlaceholder,
  isCurrentPlaceholder,
  getDisplay,
  getFirstValue,
};
