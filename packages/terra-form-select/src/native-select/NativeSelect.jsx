import React, {
  useState,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import {
  defaultPlaceholderValue,
  isCurrentPlaceholder,
  getDisplay,
  getFirstValue,
  getOptGroupKey,
  getOptGroupKeyIndex,
} from './NativeUtils';
import {
  optionPropType,
  optGroupPropType,
} from './NativePropTypes';

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
   * The Select identifier. Links the htmlFor of the field to the select identifier.
   */
  id: PropTypes.string.isRequired,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
  /**
   * Whether the input is invalid.
   */
  isInvalid: PropTypes.bool,
  /**
   * Whether the field displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
   */
  isIncomplete: PropTypes.bool,
  /**
   * Callback function triggered when the select value changes. function(value)
   */
  onChange: PropTypes.func,
  /**
   * The array of select options and opt groups.
   */
  options: PropTypes.arrayOf(PropTypes.oneOfType([optionPropType, optGroupPropType])),
  /**
   * Placeholder data. The presence of this data object is used as the indicator for whether or not a placeholder is used.
   */
  placeholder: PropTypes.shape({
    /**
     * Whether the placeholder is included as an option to clear selection.
     */
    allowClear: PropTypes.bool,
    /**
     * Optional override of the default display.
     */
    display: PropTypes.string,
    /**
     * Optional override of the default value.
     */
    value: PropTypes.string,
  }),
  /**
   * Whether the field is required.
   */
  required: PropTypes.bool,
  /**
   * The value of the select. Can be a string or number.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  disabled: false,
  isIncomplete: false,
  isInvalid: false,
  options: [],
  required: false,
};

const createPlaceholder = (placeholder, intl) => {
  if (!placeholder) {
    return undefined;
  }
  const display = placeholder.display ? placeholder.display : intl.formatMessage({ id: 'Terra.form.select.defaultDisplay' });
  const value = placeholder.value ? placeholder.value : defaultPlaceholderValue;
  const attrs = placeholder.allowClear ? {} : { disabled: true, hidden: true };
  return <option value={value} {...attrs}>{display}</option>;
};

const createOptions = options => {
  const currentOptGroupKeys = [];

  return options.map(current => {
    if (current.options) {
      const optGroupKeyIndex = getOptGroupKeyIndex(current.display, currentOptGroupKeys);
      const optGroupKey = getOptGroupKey(current.display, optGroupKeyIndex);
      currentOptGroupKeys.push(optGroupKey);

      return (
        <optgroup key={optGroupKey} label={current.display}>
          {createOptions(current.options)}
        </optgroup>
      );
    }
    return <option key={`${current.value}`} value={current.value}>{current.display}</option>;
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
  isInvalid,
  isIncomplete,
  onChange,
  options,
  placeholder,
  required,
  value,
  ...customProps
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(!value ? defaultValue || getFirstValue(options, placeholder) : undefined);
  const refIsControlled = useRef(!uncontrolledValue);
  const refSelect = useRef();
  const theme = React.useContext(ThemeContext);

  const handleOnMouseDown = () => {
    refSelect.current.setAttribute('data-focus-interaction', 'mouse');
  };
  const handleOnBlur = () => {
    refSelect.current.setAttribute('data-focus-interaction', 'none');
  };
  const handleOnFocus = () => {
    if (refSelect.current.getAttribute('data-focus-interaction') !== 'mouse') {
      refSelect.current.setAttribute('data-focus-interaction', 'keyboard');
    }
  };
  const handleOnChange = event => {
    if (onChange) {
      onChange(event);
    }
    if (!refIsControlled.current) {
      setUncontrolledValue(event.currentTarget.value);
    }
  };

  let currentValue = refIsControlled.current ? value : uncontrolledValue;
  let currentDisplay = getDisplay(currentValue, options, placeholder, intl);
  if (!currentDisplay) {
    currentValue = getFirstValue(options, placeholder);
    currentDisplay = getDisplay(currentValue, options, placeholder, intl);
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
      { placeholder: isCurrentPlaceholder(selectAttrs.value, placeholder) },
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
      >
        {createPlaceholder(placeholder, intl)}
        {createOptions(options)}
      </select>
    </div>
  );
};

NativeSelect.propTypes = propTypes;
NativeSelect.defaultProps = defaultProps;

export default injectIntl(NativeSelect);
