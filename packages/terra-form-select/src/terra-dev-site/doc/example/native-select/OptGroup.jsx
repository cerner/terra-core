import React from 'react';
import classNames from 'classnames/bind';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const OptGroupExample = () => (
  <NativeSelect
    id="opt-group-example"
    ariaLabel="OptGroup Example"
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
    className={cx('form-select')}
  />
);

export default OptGroupExample;
