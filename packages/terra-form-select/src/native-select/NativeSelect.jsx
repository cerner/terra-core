import React, {
  useState,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import {
  defaultPlaceholderValue,
  isCurrentPlaceholder,
  getDisplay,
  getFirstValue,
} from './NativeUtils';

import styles from './NativeSelect.module.scss';

const cx = classNames.bind(styles);

const optionPropType = PropTypes.shape({
  /**
   * The option display.
   */
  display: PropTypes.string.isRequired,
  /**
   * Whether the option is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The option value.
   */
  value: PropTypes.string.isRequired,
});

const optGroupPropType = PropTypes.shape({
  /**
   * The option display.
   */
  display: PropTypes.string.isRequired,
  /**
   * Whether the optgroup is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The array of select options.
   */
  childOptions: PropTypes.arrayOf(optionPropType).isRequired,
});

const propTypes = {
  /**
   * The string containing ids for elements to describe the select.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * The aria label string value for the select.
   */
  ariaLabel: PropTypes.string,
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
  invalid: PropTypes.bool,
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
  options: PropTypes.arrayOf(PropTypes.oneOf([optGroupPropType, optGroupPropType])),
  /**
   * Placeholder data.
   */
  placeholder: PropTypes.shape({
    /**
     * Whether a clear option is available to clear the selection.
     */
    allowClear: PropTypes.bool,
    /**
     * Optional override of the default placeholder display.
     */
    display: PropTypes.string,
    /**
     * Optional override of the default placeholder value.
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
  value: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  invalid: false,
  isIncomplete: false,
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
      <optgroup label={current.display}>
        {createOptions(current.childOptions)}
      </optgroup>
    );
  }
  return <option value={current.value}>{current.display}</option>;
});

const NativeSelect = ({
  ariaDescribedBy,
  ariaLabel,
  disabled,
  defaultValue,
  id,
  intl,
  invalid,
  isIncomplete,
  onChange,
  options,
  placeholder,
  required,
  value,
}) => {
  const [currentValue, setCurrentValue] = useState(defaultValue || getFirstValue(options, placeholder));
  const refSelect = useRef();

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
    if (!value) {
      setCurrentValue(event.currentTarget.value);
    }
  };

  const selectAttrs = {
    ariaDescribedBy,
    ariaLabel,
    id,
    disabled,
    invalid,
    required,
    value: value || currentValue,
  };

  return (
    <div
      className={cx(
        'outer',
        { disabled },
        { invalid },
        { incomplete: required && isIncomplete },
        { placeholder: isCurrentPlaceholder(selectAttrs.value, placeholder) },
      )}
      ref={refSelect}
      data-focus-interaction="none"
    >
      <div aria-hidden className={cx('frame')}>
        <div className={cx('display')}>
          {getDisplay(selectAttrs.value, options, placeholder, intl)}
        </div>
        <div className={cx('arrow')}>
          <div className={cx('arrow-icon')} />
        </div>
      </div>
      <select
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
