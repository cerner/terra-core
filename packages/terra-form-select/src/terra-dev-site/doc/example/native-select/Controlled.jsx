import React, { useState } from 'react';
import classNames from 'classnames/bind';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const ControlledExample = () => {
  const [value, setValue] = useState('volvo');

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
      <button type="button" onClick={() => setValue()}>Clear</button>
      <button type="button" onClick={() => setValue('mercedes')}>Set Mercedes</button>
    </>
  );
};

export default ControlledExample;
