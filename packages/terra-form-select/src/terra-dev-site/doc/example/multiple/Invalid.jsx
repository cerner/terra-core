import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import MultipleSelect from 'terra-form-select/lib/MultipleSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const InvalidExample = () => (
  <MultipleSelect placeholder="Select a color" isInvalid className={cx('form-select')}>
    <MultipleSelect.Option value="blue" display="Blue" />
    <MultipleSelect.Option value="green" display="Green" />
    <MultipleSelect.Option value="purple" display="Purple" />
    <MultipleSelect.Option value="red" display="Red" />
    <MultipleSelect.Option value="violet" display="Violet" />
  </MultipleSelect>
);

export default InvalidExample;
