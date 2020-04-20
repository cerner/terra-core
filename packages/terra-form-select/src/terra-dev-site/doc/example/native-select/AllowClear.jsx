import React from 'react';
import classNames from 'classnames/bind';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const AllowClearExample = () => (
  <NativeSelect
    id="allow-clear-example"
    ariaLabel="Allow Clear Example"
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
    placeholder={{ allowClear: true }}
    className={cx('form-select')}
  />
);

export default AllowClearExample;
