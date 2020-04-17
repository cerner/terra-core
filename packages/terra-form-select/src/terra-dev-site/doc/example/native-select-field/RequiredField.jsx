import React from 'react';
import classNames from 'classnames/bind';
import NativeSelectField from 'terra-form-select/lib/native-select/NativeSelectField';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const RequiredFieldExample = () => (
  <NativeSelectField
    selectId="required-example"
    label="Required Field Text"
    required
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
    placeholder={{}}
    className={cx('form-select')}
  />
);

export default RequiredFieldExample;
