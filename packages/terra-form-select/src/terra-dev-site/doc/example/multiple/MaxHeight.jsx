import React from 'react';
import MultiSelect from 'terra-form-select/lib/MultiSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const MaxHeightExample = () => (
  <MultiSelect placeholder="Select a color" maxHeight={150} className={cx('form-select')}>
    <MultiSelect.Option value="black" display="Black" />
    <MultiSelect.Option value="blue" display="Blue" />
    <MultiSelect.Option value="brown" display="Brown" />
    <MultiSelect.Option value="green" display="Green" />
    <MultiSelect.Option value="purple" display="Purple" />
    <MultiSelect.Option value="red" display="Red" />
    <MultiSelect.Option value="violet" display="Violet" />
    <MultiSelect.Option value="white" display="White" />
    <MultiSelect.Option value="yellow" display="Yellow" />
  </MultiSelect>
);

export default MaxHeightExample;
