import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import MultipleSelect from 'terra-form-select/lib/MultipleSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const MaxHeightExample = () => (
  <MultipleSelect placeholder="Select a color" maxHeight={150} className={cx('form-select')}>
    <MultipleSelect.Option value="black" display="Black" />
    <MultipleSelect.Option value="blue" display="Blue" />
    <MultipleSelect.Option value="brown" display="Brown" />
    <MultipleSelect.Option value="green" display="Green" />
    <MultipleSelect.Option value="purple" display="Purple" />
    <MultipleSelect.Option value="red" display="Red" />
    <MultipleSelect.Option value="violet" display="Violet" />
    <MultipleSelect.Option value="white" display="White" />
    <MultipleSelect.Option value="yellow" display="Yellow" />
  </MultipleSelect>
);

export default MaxHeightExample;
