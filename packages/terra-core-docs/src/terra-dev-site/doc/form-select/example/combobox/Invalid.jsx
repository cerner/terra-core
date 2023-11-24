import React, { useState, useRef } from 'react';
import Combobox from 'terra-form-select/lib/Combobox';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const InvalidExample = () => {
  const [isInvalid, setIsInvalid] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');
  const [isFocused, setisFocused] = useState(false);
  const invalidText = useRef(null);

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    if (value == null || value === '') {
      setIsInvalid(true);
      invalidText.current = 'Please select a color';
    } else {
      setIsInvalid(false);
      invalidText.current = '';
    }
  };

  const handleFocus = () => {
    if (!isFocused) {
      setisFocused(true);
      if (selectedValue === '' || selectedValue === null) {
        invalidText.current = 'Please select a color';
      } else {
        invalidText.current = null;
      }
    }
  };

  const handleBlur = () => {
    if (isFocused) {
      setisFocused(false);
      invalidText.current = null;
    }
  };

  return (
    <>
      <Combobox placeholder="Select a color" isInvalid={isInvalid} onBlur={handleBlur} onFocus={handleFocus} allowClear onSelect={handleSelectChange} className={cx('form-select')}>
        <Combobox.Option value="blue" display="Blue" />
        <Combobox.Option value="green" display="Green" />
        <Combobox.Option value="purple" display="Purple" />
        <Combobox.Option value="red" display="Red" />
        <Combobox.Option value="violet" display="Violet" />
      </Combobox>
      {isInvalid && (
        <p className={cx('error-text')}>
          Please select a color
        </p>
      )}
      <VisuallyHiddenText
        aria-atomic="true"
        aria-relevant="additions text"
        aria-live="polite"
        text={invalidText.current}
      />
      <p>Required: Please select a color from above list</p>
    </>
  );
};
export default InvalidExample;
