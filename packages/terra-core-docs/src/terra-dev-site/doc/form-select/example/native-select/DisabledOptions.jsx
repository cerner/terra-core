import React from 'react';
import classNames from 'classnames/bind';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const DisabledOptionsExample = () => (
  <NativeSelect
    ariaLabel="Uncontrolled Example"
    options={[
      { disabled: true, value: 'volvo', display: 'Volvo' },
      { disabled: true, value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
    className={cx('form-select')}
  />
);

export default DisabledOptionsExample;
