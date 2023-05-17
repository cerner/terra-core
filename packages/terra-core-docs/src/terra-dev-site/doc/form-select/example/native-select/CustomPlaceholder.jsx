import React from 'react';
import classNames from 'classnames/bind';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const CustomPlaceholderExample = () => (
  <NativeSelect
    ariaLabel="Custom Placeholder Example"
    isFilterStyle
    isCustomPlaceholder
    options={[
      { value: '', display: '- Select an option -', isPlaceholderOption: true },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
    className={cx('form-select')}
  />
);

export default CustomPlaceholderExample;
