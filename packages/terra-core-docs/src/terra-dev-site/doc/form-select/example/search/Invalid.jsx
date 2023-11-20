import React, { useState } from 'react';
import SearchSelect from 'terra-form-select/lib/SearchSelect';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const InvalidExample = () => {
  const [isInvalid, setIsInvalid] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');
  const [invalidText, setInvalidText] = useState(null);

  const handleSelectChange = (value) => {
    setIsInvalid(false);
    setSelectedValue(value);
  };

  const handleFocus = () => {
    setInvalidText('Please select a color');
  };

  return (
    <>
      <SearchSelect
        placeholder="Select a color"
        isInvalid={isInvalid}
        className={cx('form-select')}
        onSelect={handleSelectChange}
        onFocus={handleFocus}
      >
        <SearchSelect.Option value="Blue" display="Blue" />
        <SearchSelect.Option value="Green" display="Green" />
        <SearchSelect.Option value="Purple" display="Purple" />
        <SearchSelect.Option value="Red" display="Red" />
        <SearchSelect.Option value="Violet" display="Violet" />
      </SearchSelect>
      { isInvalid && (
        // eslint-disable-next-line react/forbid-dom-props
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
      <p>Required: please select a color from above list</p>
    </>
  );
};

export default InvalidExample;
