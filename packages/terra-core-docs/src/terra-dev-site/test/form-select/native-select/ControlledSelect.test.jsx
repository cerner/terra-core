import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { NativeSelect } from 'terra-form-select';
import Button from 'terra-button';
import styles from './NativeSelectTest.module.scss';

const cx = classNames.bind(styles);

const ControlledSelect = () => {
  const [value, setValue] = useState(null);

  return (
    <div className={cx('test-shell')}>
      <NativeSelect
        ariaLabel="Controlled Select Example"
        id="test-select-id"
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
      <Button id="test-button-id" text="Set Mercedes" onClick={() => setValue('mercedes')} />
    </div>
  );
};

export default ControlledSelect;
