import React from 'react';
import classNames from 'classnames/bind';
import SelectField from '../../../SelectField';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const MaxSelectionExample = () => (
  <div className={cx('content-wrapper')}>
  	<SelectField
      id="tag"
      label="Colors"
      maxSelectionCount={2}
      placeholder="Select a color"
      selectId="select-field"
      variant="tag"
      help="Shades of blue and green."
    >
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
  </div>
);

export default MaxSelectionExample;
