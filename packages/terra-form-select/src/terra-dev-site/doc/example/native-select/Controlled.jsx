import React, { useState } from 'react';
import classNames from 'classnames/bind';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const ControlledExample = () => {
  const [value, setValue] = useState('mercedes');

  return (
    <>
      <NativeSelect
        id="controlled-example"
        ariaLabel="Controlled Select Example"
        value={value}
        onChange={event => setValue(event.currentTarget.value)}
        options={[
          { value: 'volvo', display: 'Volvo' },
          { value: 'saab', display: 'Saab' },
          { value: 'mercedes', display: 'Mercedes' },
          { value: 'audi', display: 'Audi' },
        ]}
        className={cx('form-select')}
      />
      <button onClick={() => setValue()}>Clear</button>
      <button onClick={() => setValue('volvo')}>Set Volvo</button>
    </>
  );
};

export default ControlledExample;
