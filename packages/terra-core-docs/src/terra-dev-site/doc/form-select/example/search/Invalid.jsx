import React, { useState } from 'react';
import SearchSelect from 'terra-form-select/lib/SearchSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);
const InvalidExample = () => {
  const [isInvalid, setInvalid] = useState(true);
  const handleOnChange = (value) => {
    const invalid = !!((!value || value === ''));
    setInvalid(invalid);
  };
  return (
    <>
      <SearchSelect placeholder="Select a color" isInvalid={isInvalid} ariaLabel={(isInvalid) ? 'Please select a color' : undefined} className={cx('form-select')} onSearch={handleOnChange} onChange={handleOnChange}>
        <SearchSelect.Option value="blue" display="Blue" />
        <SearchSelect.Option value="green" display="Green" />
        <SearchSelect.Option value="purple" display="Purple" />
        <SearchSelect.Option value="red" display="Red" />
        <SearchSelect.Option value="violet" display="Violet" />
      </SearchSelect>
      {isInvalid && <span className={cx('error-text')}>Please select a color</span>}
      <p>Required: Please select a color from above list</p>
    </>
  );
};
export default InvalidExample;
