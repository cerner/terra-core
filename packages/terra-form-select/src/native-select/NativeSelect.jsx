import React, {
  useState,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import {
  defaultPlaceholderValue,
  isCurrentPlaceholder,
  isValuePresent,
  getDisplay,
  getFirstValue,
  getOptGroupKey,
  getOptGroupKeyIndex,
} from './_NativeUtils';
import {
  optionPropType,
  optGroupPropType,
} from './_NativePropTypes';

import styles from './NativeSelect.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The string containing ids for elements to describe the select.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * The aria label string value for the select.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Additional attributes to spread directly onto the html select node.
   * This prop is provided as standard customProps are spread onto the outer containing element which is not the html select in this case.
   */
  // eslint-disable-next-line react/forbid-prop-types
  attrs: PropTypes.object,
  /**
   * The default value of the select. Can be a string, or number.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Whether the input is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The Select identifier to be applied to the html select node.
   */
  id: PropTypes.string,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * Whether the select input should use the filter style display, forcing a value to always be selected.
   * This also removes the placeholder and removes the ability for user to clear the value, returning the select to browser-native behavior.
   */
  isFilterStyle: PropTypes.bool,
  /**
   * Whether the input is invalid.
   */
  isInvalid: PropTypes.bool,
  /**
   * Whether the field displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
   */
  isIncomplete: PropTypes.bool,
  /**
   * Callback function triggered when the select value changes. function(event)
   */
  onChange: PropTypes.func,
  /**
   * The array of select options and opt groups.
   */
  options: PropTypes.arrayOf(PropTypes.oneOfType([optionPropType, optGroupPropType])),
  /**
   * Callback ref to pass into the select input component.
   */
  refCallback: PropTypes.func,
  /**
   * Whether the field is required.
   */
  required: PropTypes.bool,
  /**
   * The value of the select. Can be a string or number.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onBlur: PropTypes.func,
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onFocus: PropTypes.func,
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onMouseDown: PropTypes.func,
};

const defaultProps = {
  disabled: false,
  isFilterStyle: false,
  isIncomplete: false,
  isInvalid: false,
  options: [],
  required: false,
};

const createPlaceholder = (isFilterStyle, intl) => {
  if (isFilterStyle) {
    return undefined;
  }

  return (
    <option
      value={defaultPlaceholderValue}
    >
      {intl.formatMessage({ id: 'Terra.form.select.defaultDisplay' })}
    </option>
  );
};

const createOptions = options => {
  const currentOptGroupKeys = [];

  return options.map(current => {
    const attr = current.disabled ? { disabled: true } : undefined;
    if (current.options) {
      const optGroupKeyIndex = getOptGroupKeyIndex(current.display, currentOptGroupKeys);
      const optGroupKey = getOptGroupKey(current.display, optGroupKeyIndex);
      currentOptGroupKeys.push(optGroupKey);

      return (
        <optgroup {...attr} key={optGroupKey} label={current.display}>
          {createOptions(current.options)}
        </optgroup>
      );
    }
    return <option {...attr} key={`${current.value}`} value={current.value}>{current.display}</option>;
  });
};

const NativeSelect = ({
  ariaDescribedBy,
  ariaLabel,
  attrs,
  disabled,
  defaultValue,
  id,
  intl,
  isFilterStyle,
  isInvalid,
  isIncomplete,
  onBlur,
  onChange,
  onFocus,
  onMouseDown,
  options,
  refCallback,
  required,
  value,
  ...customProps
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(!isValuePresent(value) ? defaultValue || getFirstValue(options, isFilterStyle) : undefined);
  const refIsControlled = useRef(isValuePresent(value));
  const refSelect = useRef();
  const theme = React.useContext(ThemeContext);

  // The native select's presentation is masked to allow for better customization of the inputs display.
  // In order to facilitate this, the mouseDown, blur, and focus events need to be mapped mapped to the mask.
  const handleOnMouseDown = (event) => {
    refSelect.current.setAttribute('data-focus-interaction', 'mouse');
    if (onMouseDown) {
      onMouseDown(event);
    }
  };
  const handleOnBlur = (event) => {
    refSelect.current.setAttribute('data-focus-interaction', 'none');
    if (onBlur) {
      onBlur(event);
    }
  };
  const handleOnFocus = (event) => {
    if (refSelect.current.getAttribute('data-focus-interaction') !== 'mouse') {
      refSelect.current.setAttribute('data-focus-interaction', 'keyboard');
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const handleOnChange = event => {
    if (!refIsControlled.current) {
      setUncontrolledValue(event.currentTarget.value);
    }
    if (onChange) {
      onChange(event);
    }
  };

  let currentValue = refIsControlled.current ? value : uncontrolledValue;
  let currentDisplay = getDisplay(currentValue, options, isFilterStyle, intl);
  if (!currentDisplay) {
    currentValue = getFirstValue(options, isFilterStyle);
    currentDisplay = getDisplay(currentValue, options, isFilterStyle, intl);
  }

  const selectAttrs = {
    'aria-describedby': ariaDescribedBy,
    'aria-label': ariaLabel,
    id,
    disabled,
    'aria-invalid': isInvalid || undefined,
    required,
    value: currentValue,
  };

  const nativeClassNames = classNames(
    cx(
      'native',
      theme.className,
      { disabled },
      { invalid: isInvalid },
      { incomplete: required && isIncomplete },
      { placeholder: isCurrentPlaceholder(selectAttrs.value, isFilterStyle) },
    ),
    customProps.className,
  );

  return (
    <div
      {...customProps}
      className={nativeClassNames}
      ref={refSelect}
      data-focus-interaction="none"
    >
      <div aria-hidden className={cx('frame')}>
        <div
          className={cx('display')}
          aria-disabled={disabled || undefined}
        >
          {currentDisplay}
        </div>
        <div className={cx('arrow')}>
          <div className={cx('arrow-icon')} />
        </div>
      </div>
      <select
        {...attrs}
        {...selectAttrs}
        className={cx('select')}
        onChange={handleOnChange}
        onMouseDown={handleOnMouseDown}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={refCallback}
      >
        {createPlaceholder(isFilterStyle, intl)}
        {createOptions(options)}
      </select>
    </div>
  );
};

NativeSelect.propTypes = propTypes;
NativeSelect.defaultProps = defaultProps;

export default injectIntl(NativeSelect);
