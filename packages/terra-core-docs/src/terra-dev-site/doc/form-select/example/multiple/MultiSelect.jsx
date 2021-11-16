import React from 'react';
import MultiSelect from 'terra-form-select/lib/MultiSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const MultiSelectExample = () => (
  <MultiSelect placeholder="Select a color" className={cx('form-select')}>
    <MultiSelect.Option value="blue" display="Blue" />
    <MultiSelect.Option value="green" display="Green" />
    <MultiSelect.Option value="purple" display="Purple" />
    <MultiSelect.Option value="red" display="Red" />
    <MultiSelect.Option value="violet" display="Violet" />
  </MultiSelect>
);

export default MultiSelectExample;
