import React from 'react';
import classNames from 'classnames/bind';
import NativeSelect from '../../../../native-select/NativeSelect';
import styles from './NativeSelectTest.module.scss';

const cx = classNames.bind(styles);

const InvalidTest = () => (
  <div className={cx('test-shell')}>
    <NativeSelect
      ariaLabel="select-label"
      disabled
      id="select-id"
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes' },
        { value: 'audi', display: 'Audi' },
      ]}
    />
    <br />
    <NativeSelect
      ariaLabel="select-value-label"
      disabled
      id="select-value-id"
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes' },
        { value: 'audi', display: 'Audi' },
      ]}
      value="saab"
    />
  </div>
);

export default InvalidTest;
