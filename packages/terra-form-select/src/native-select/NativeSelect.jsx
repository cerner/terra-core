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
   * Additional attributes to spread onto the select.
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

const createOptions = options => options.map(current => {
  if (current.childOptions) {
    return (
      <optgroup key={`${current.display} ${current.childOptions.length}`} label={current.display}>
        {createOptions(current.childOptions)}
      </optgroup>
    );
  }
  return <option key={`${current.value}`} value={current.value}>{current.display}</option>;
});

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
  const [currentValue, setCurrentValue] = useState(defaultValue || getFirstValue(options, placeholder));
  const refIsControlled = useRef(!defaultValue && value);
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
      setCurrentValue(event.currentTarget.value);
    }
  };

  let controlledValue;
  if (refIsControlled.current) {
    controlledValue = value || getFirstValue(options, placeholder);
  }

  const selectAttrs = {
    'aria-describedby': ariaDescribedBy,
    'aria-label': ariaLabel,
    id,
    disabled,
    'aria-invalid': isInvalid || undefined,
    required,
    value: controlledValue || currentValue,
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
          {getDisplay(selectAttrs.value, options, placeholder, intl)}
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
