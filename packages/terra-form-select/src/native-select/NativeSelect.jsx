import React, {
  useState,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import {
  createOptions,
  createPlaceholder,
  isCurrentPlaceholder,
  getDisplay,
  getFirstValue,
} from './NativeUtils';

import styles from './NativeSelect.module.scss';

const cx = classNames.bind(styles);

const optionPropType = PropTypes.shape({
  display: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
});

const optGroupPropType = PropTypes.shape({
  display: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  childOptions: PropTypes.arrayOf(optionPropType).isRequired,
});

const propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabel: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
  invalid: PropTypes.bool,
  isIncomplete: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.oneOf([optGroupPropType, optGroupPropType])),
  placeholder: PropTypes.shape({
    allowClear: PropTypes.bool,
    display: PropTypes.string, // Optional with default
    value: PropTypes.string, // Optional with default
  }),
  required: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  invalid: false,
  isIncomplete: false,
  options: [],
  required: false,
};

const NativeSelect = ({
  disabled,
  defaultValue,
  id,
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
    refSelect.current.setAttribute('data-focus-styles-enabled', 'mouse');
  };
  const handleOnBlur = () => {
    refSelect.current.setAttribute('data-focus-styles-enabled', 'none');
  };
  const handleOnFocus = () => {
    if (refSelect.current.getAttribute('data-focus-styles-enabled') !== 'mouse') {
      refSelect.current.setAttribute('data-focus-styles-enabled', 'keyboard');
    }
  };
  const handleOnChange = event => {
    if (onChange) {
      onChange(event);
    }
    setCurrentValue(event.currentTarget.value);
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
      data-focus-styles-enabled="none"
    >
      <div aria-hidden className={cx('frame')}>
        <div className={cx('display')}>
          {getDisplay(selectAttrs.value, options, placeholder)}
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
        {createPlaceholder(placeholder)}
        {createOptions(options)}
      </select>
    </div>
  );
};

NativeSelect.propTypes = propTypes;
NativeSelect.defaultProps = defaultProps;

export default injectIntl(NativeSelect);
