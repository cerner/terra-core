import React from 'react';
import classNames from 'classnames/bind';
import NativeSelectField from '../../../../native-select/NativeSelectField';
import styles from './NativeSelectTest.module.scss';

const cx = classNames.bind(styles);

const IncompleteFieldTest = () => (
  <div className={cx('test-shell')}>
    <NativeSelectField
      isIncomplete
      label="Incomplete Field Text"
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes' },
        { value: 'audi', display: 'Audi' },
      ]}
      required
      selectId="test-id"
    />
  </div>
);

export default IncompleteFieldTest;
