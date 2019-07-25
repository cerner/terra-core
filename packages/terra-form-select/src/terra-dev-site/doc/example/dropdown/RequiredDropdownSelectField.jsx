import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownSelectField from 'terra-form-select/lib/DropdownSelectField';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const DropdownSelectFieldExample = () => (
  <DropdownSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field" required className={cx('form-select')}>
    <DropdownSelectField.Option value="xSmall" display="Extra Small" />
    <DropdownSelectField.Option value="small" display="Small" />
    <DropdownSelectField.Option value="medium" display="Medium" />
    <DropdownSelectField.Option value="large" display="Large" />
    <DropdownSelectField.Option value="xLarge" display="Extra Large" />
  </DropdownSelectField>
);

export default DropdownSelectFieldExample;
