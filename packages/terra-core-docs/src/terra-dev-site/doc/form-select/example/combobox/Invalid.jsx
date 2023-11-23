import React, { useState } from 'react';
import Combobox from 'terra-form-select/lib/Combobox';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const InvalidExample = () => {
  const [isInvalid, setIsInvalid] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');
  const [invalidText, setInvalidText] = useState(null);

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    if (value == null || value === '') {
      setInvalidText('Please select a color');
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
      setInvalidText(null);
    }
  };

  const handleFocus = () => {
    if (isInvalid) setInvalidText('Please select a color');
  };

  return (
    <>
      <Combobox placeholder="Select a color" isInvalid={isInvalid} allowClear onSelect={handleSelectChange} onFocus={handleFocus} className={cx('form-select')}>
        <Combobox.Option value="blue" display="Blue" />
        <Combobox.Option value="green" display="Green" />
        <Combobox.Option value="purple" display="Purple" />
        <Combobox.Option value="red" display="Red" />
        <Combobox.Option value="violet" display="Violet" />
      </Combobox>
      {isInvalid && (
        <p className={cx('error-text')}>
          {selectedValue}
          {' '}
          Please select a color
        </p>
      )}
      <VisuallyHiddenText
        aria-atomic="true"
        aria-live="assertive"
        text={invalidText}
      />
      <p>Required: Please select a color from above list</p>
    </>
  );
};
export default InvalidExample;
