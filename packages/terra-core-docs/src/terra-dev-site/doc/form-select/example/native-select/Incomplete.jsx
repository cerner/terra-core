import React from 'react';
import classNames from 'classnames/bind';
import { NativeSelect } from 'terra-form-select';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const IncompleteExample = () => (
  <NativeSelect
    ariaLabel="Incomplete Example"
    isIncomplete
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
    required
    className={cx('form-select')}
  />
);

export default IncompleteExample;
