import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { NativeSelect } from 'terra-form-select';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const ControlledExample = () => {
  const [value, setValue] = useState('volvo');

  const clickHandler = (selectedValue) => {
    setValue(selectedValue);
  };

  return (
    <>
      <NativeSelect
        ariaLabel="Controlled Select Example"
        onChange={event => setValue(event.currentTarget.value)}
        options={[
          { value: 'volvo', display: 'Volvo' },
          { value: 'saab', display: 'Saab' },
          { value: 'mercedes', display: 'Mercedes' },
          { value: 'audi', display: 'Audi' },
        ]}
        value={value}
        className={cx('form-select')}
      />
      <button type="button" className={cx('controlled-button')} onClick={() => clickHandler()}>Clear</button>
      <button type="button" className={cx('controlled-button')} onClick={() => clickHandler('mercedes')}>Set Mercedes</button>
    </>
  );
};

export default ControlledExample;
