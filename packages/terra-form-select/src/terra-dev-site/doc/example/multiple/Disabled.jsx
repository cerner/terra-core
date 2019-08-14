import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import MultiSelect from 'terra-form-select/lib/MultiSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const DisabledExample = () => (
  <MultiSelect placeholder="Select a color" disabled className={cx('form-select')} defaultValue={['red', 'white', 'blue']}>
    <MultiSelect.Option value="blue" display="Blue" />
    <MultiSelect.Option value="green" display="Green" />
    <MultiSelect.Option value="purple" display="Purple" />
    <MultiSelect.Option value="red" display="Red" />
    <MultiSelect.Option value="violet" display="Violet" />
    <MultiSelect.Option value="white" display="White" />
  </MultiSelect>
);

export default DisabledExample;
