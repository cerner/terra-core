import React from 'react';
import classNames from 'classnames/bind';
import { NativeSelect } from 'terra-form-select';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const FilterStyleExample = () => (
  <NativeSelect
    ariaLabel="Default Placeholder Example"
    isFilterStyle
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
    className={cx('form-select')}
  />
);

export default FilterStyleExample;
