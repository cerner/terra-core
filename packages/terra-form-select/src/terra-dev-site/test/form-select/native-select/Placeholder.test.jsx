import React from 'react';
import classNames from 'classnames/bind';
import NativeSelect from '../../../../native-select/NativeSelect';
import styles from './NativeSelectTest.module.scss';

const cx = classNames.bind(styles);

const PlaceholderTest = () => (
  <div className={cx('test-shell')}>
    <NativeSelect
      ariaLabel="select-label"
      hasPlaceholder
      id="select-id"
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes' },
        { value: 'audi', display: 'Audi' },
      ]}
    />
  </div>
);

export default PlaceholderTest;
