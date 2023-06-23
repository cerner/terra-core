import React, { useState } from 'react';
import classNames from 'classnames/bind';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import Button from 'terra-button';
import styles from './NativeSelectTest.module.scss';

const cx = classNames.bind(styles);

const ControlledSelect = () => {
  const [value, setValue] = useState(null);

  return (
    <>
      <NativeSelect
        ariaLabel="Controlled Select Example"
        selectId="test-select-id"
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
    </>
  );
};

export default ControlledSelect;
