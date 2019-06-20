import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SelectField from 'terra-form-select/lib/SelectField';
import classNames from 'classnames/bind';
import styles from './FormSelectDocCommon.scss';

const cx = classNames.bind(styles);

const MaxSelectionExample = () => (
  <SelectField help="Shades of blue and green." label="Colors" maxSelectionCount={3} placeholder="Select a size" selectId="max-selection-field" variant="multiple" className={cx('form-select')}>
    <SelectField.OptGroup label="Shades of Blue">
      <SelectField.Option value="blue" display="Blue" />
      <SelectField.Option value="cyan" display="Cyan" />
      <SelectField.Option disabled value="teal" display="Teal" />
      <SelectField.Option value="azul" display="Azul" />
      <SelectField.Option value="aqua" display="Aqua" />
    </SelectField.OptGroup>
    <SelectField.OptGroup label="Shades of Green">
      <SelectField.Option value="green" display="Green" />
      <SelectField.Option value="forest" display="Forest Green" />
      <SelectField.Option disabled value="dark" display="Dark Green" />
      <SelectField.Option value="neon" display="Neon Green" />
      <SelectField.Option value="emerald" display="Emerald" />
    </SelectField.OptGroup>
  </SelectField>
);

export default MaxSelectionExample;
