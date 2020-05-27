import React from 'react';
import classNames from 'classnames/bind';
import NativeSelectField from '../../../../native-select/NativeSelectField';
import styles from './NativeSelectTest.module.scss';

const cx = classNames.bind(styles);

const IncompleteFieldTest = () => (
  <div className={cx('test-shell')}>
    <NativeSelectField
      selectId="test-id"
      label="Incomplete Field Text"
      required
      isIncomplete
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

export default IncompleteFieldTest;
