import React from 'react';
import classNames from 'classnames/bind';
import NativeSelectField from '../../../native-select/NativeSelectField';
import styles from './NativeSelectTest.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable react/forbid-dom-props */
const NativeSelectFieldTest = () => (
  <div className={cx('test-shell')}>
    <div className={cx('test-inner')}>
      <NativeSelectField
        label="Default Field Text"
        options={[
          { value: 'volvo', display: 'Volvo' },
          { value: 'saab', display: 'Saab' },
          { value: 'mercedes', display: 'Mercedes' },
          { value: 'audi', display: 'Audi' },
        ]}
        placeholder={{}}
      />
      <NativeSelectField
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
      <NativeSelectField
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
  </div>
);

export default NativeSelectFieldTest;
