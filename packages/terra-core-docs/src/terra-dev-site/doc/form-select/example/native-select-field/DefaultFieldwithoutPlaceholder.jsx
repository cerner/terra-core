import React from 'react';
import classNames from 'classnames/bind';
import {NativeSelectField} from 'terra-form-select';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const DefaultFieldExamplewithoutPlaceholder = () => (
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

export default DefaultFieldExamplewithoutPlaceholder;
