import React from 'react';
import classNames from 'classnames/bind';
import NativeSelect from '../../../../native-select/NativeSelect';
import styles from './NativeSelectTest.module.scss';

const cx = classNames.bind(styles);

const OptGroupTest = () => (
  <div className={cx('test-shell')}>
    <NativeSelect
      id="select-id"
      options={[
        {
          display: 'Swedish Cars',
          childOptions: [
            { value: 'volvo', display: 'Volvo' },
            { value: 'saab', display: 'Saab' },
          ],
        },
        {
          display: 'German Cars',
          childOptions: [
            { value: 'mercedes', display: 'Mercedes' },
            { value: 'audi', display: 'Audi' },
          ],
        },
      ]}
    />
  </div>
);

export default OptGroupTest;
