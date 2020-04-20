import React from 'react';
import classNames from 'classnames/bind';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const PlaceholderExample = () => (
  <NativeSelect
    id="custom-placeholder-example"
    ariaLabel="Custom Placeholder Example"
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
    placeholder={{ display: 'Pick A Car', value: 'my-custom-blank-value' }}
    className={cx('form-select')}
  />
);

export default PlaceholderExample;
