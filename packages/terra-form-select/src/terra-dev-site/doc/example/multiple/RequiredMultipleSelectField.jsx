import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import MultipleSelectField from 'terra-form-select/lib/MultipleSelectField';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const MultipleSelectFieldExample = () => (
  <MultipleSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field" required className={cx('form-select')}>
    <MultipleSelectField.Option value="xSmall" display="Extra Small" />
    <MultipleSelectField.Option value="small" display="Small" />
    <MultipleSelectField.Option value="medium" display="Medium" />
    <MultipleSelectField.Option value="large" display="Large" />
    <MultipleSelectField.Option value="xLarge" display="Extra Large" />
  </MultipleSelectField>
);

export default MultipleSelectFieldExample;
