import React from 'react';
import { MultiSelect } from 'terra-form-select';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const IsTouchAccessibleExample = () => (
  <MultiSelect placeholder="Select a color" className={cx('form-select')} isTouchAccessible>
    <MultiSelect.Option value="blue" display="Blue" />
    <MultiSelect.Option value="green" display="Green" />
    <MultiSelect.Option value="purple" display="Purple" />
    <MultiSelect.Option value="red" display="Red" />
    <MultiSelect.Option value="violet" display="Violet" />
  </MultiSelect>
);

export default IsTouchAccessibleExample;
