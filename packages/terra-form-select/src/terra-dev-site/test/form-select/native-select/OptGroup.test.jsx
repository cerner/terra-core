import React from 'react';
import classNames from 'classnames/bind';
import NativeSelect from '../../../../native-select/NativeSelect';
import styles from './NativeSelectTest.module.scss';

const cx = classNames.bind(styles);

const OptGroupTest = () => (
  <div className={cx('test-shell')}>
    <NativeSelect
      ariaLabel="select-label"
      id="select-id"
      options={[
        {
          display: 'Swedish Cars',
          options: [
            { value: 'volvo', display: 'Volvo' },
            { value: 'saab', display: 'Saab' },
          ],
        },
        {
          display: 'German Cars',
          options: [
            { value: 'mercedes', display: 'Mercedes' },
            { value: 'audi', display: 'Audi' },
          ],
        },
      ]}
    />
  </div>
);

export default OptGroupTest;
