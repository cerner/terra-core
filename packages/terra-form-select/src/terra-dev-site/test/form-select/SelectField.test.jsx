import React from 'react';
import classNames from 'classnames/bind';
import SelectField from '../../../SelectField';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const SelectFieldExample = () => (
  <div className={cx('content-wrapper')}>
    <SelectField label="T-shirt size" placeholder="Select a size" selectId="select-field" defaultValue="small">
      <SelectField.Option value="xSmall" display="Extra Small" />
      <SelectField.Option value="small" display="Small" />
      <SelectField.Option value="medium" display="Medium" />
      <SelectField.Option value="large" display="Large" />
      <SelectField.Option value="xLarge" display="Extra Large" />
    </SelectField>
  </div>
);

export default SelectFieldExample;
