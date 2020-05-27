import React from 'react';
import classNames from 'classnames/bind';
import NativeSelectField from '../../../../native-select/NativeSelectField';
import styles from './NativeSelectTest.module.scss';

const cx = classNames.bind(styles);

const RequiredFieldTest = () => (
  <div className={cx('test-shell')}>
    <NativeSelectField
      selectId="test-id"
      label="Required Field Text"
      required
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes' },
        { value: 'audi', display: 'Audi' },
      ]}
      placeholder={{}}
    />
  </div>
);

export default RequiredFieldTest;
