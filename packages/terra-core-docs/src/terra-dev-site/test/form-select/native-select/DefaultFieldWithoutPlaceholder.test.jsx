import React from 'react';
import classNames from 'classnames/bind';
import NativeSelectField from 'terra-form-select/lib/native-select/NativeSelectField';
import styles from './NativeSelectTest.module.scss';

const cx = classNames.bind(styles);

const DefaultFieldTestwithoutPlaceholder = () => (
  <NativeSelectField
    label="Default Field Text"
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
    isFilterStyle
    selectId="default-example"
    className={cx('form-select')}
  />
);

export default DefaultFieldTestwithoutPlaceholder;
