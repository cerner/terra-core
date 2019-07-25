import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import MultipleSelect from 'terra-form-select/lib/MultipleSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const DisabledExample = () => (
  <MultipleSelect placeholder="Select a color" disabled className={cx('form-select')} defaultValue={['red', 'white', 'blue']}>
    <MultipleSelect.Option value="blue" display="Blue" />
    <MultipleSelect.Option value="green" display="Green" />
    <MultipleSelect.Option value="purple" display="Purple" />
    <MultipleSelect.Option value="red" display="Red" />
    <MultipleSelect.Option value="violet" display="Violet" />
    <MultipleSelect.Option value="white" display="White" />
  </MultipleSelect>
);

export default DisabledExample;
