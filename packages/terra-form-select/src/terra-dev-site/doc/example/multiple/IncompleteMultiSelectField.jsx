import React from 'react';
import MultiSelectField from 'terra-form-select/lib/MultiSelectField';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const MultiSelectFieldExample = () => (
  <MultiSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field" className={cx('form-select')}>
    <MultiSelectField.Option value="xSmall" display="Extra Small" />
    <MultiSelectField.Option value="small" display="Small" />
    <MultiSelectField.Option value="medium" display="Medium" />
    <MultiSelectField.Option value="large" display="Large" />
    <MultiSelectField.Option value="xLarge" display="Extra Large" />
  </MultiSelectField>
);

export default MultiSelectFieldExample;
