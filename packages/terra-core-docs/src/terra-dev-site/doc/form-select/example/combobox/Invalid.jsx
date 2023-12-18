import React, { useState } from 'react';
import Combobox from 'terra-form-select/lib/Combobox';
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
      <Combobox placeholder="Select a color" required isInvalid={isInvalid} ariaLabel={(isInvalid) ? 'Please select a color' : undefined} className={cx('form-select')} onSearch={handleOnChange} onChange={handleOnChange}>
        <Combobox.Option value="blue" display="Blue" />
        <Combobox.Option value="green" display="Green" />
        <Combobox.Option value="purple" display="Purple" />
        <Combobox.Option value="red" display="Red" />
        <Combobox.Option value="violet" display="Violet" />
      </Combobox>
      {isInvalid && <span className={cx('error-text')}>Please select a color</span>}
      <p>Required: Please select a color from above list</p>
    </>
  );
};

export default InvalidExample;
