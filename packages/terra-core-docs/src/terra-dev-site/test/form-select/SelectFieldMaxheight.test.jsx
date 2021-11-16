import React from 'react';
import classNames from 'classnames/bind';
import styles from './common/Select.test.module.scss';
import SelectField from '../../../SelectField';

const cx = classNames.bind(styles);

const SelectFieldMaxheight = () => (
  <div className={cx('content-wrapper')}>
    <SelectField label="Select Field" placeholder="Select a number" selectId="selectField" defaultValue="2" maxHeight={300}>
      <SelectField.Option value="1" display="One" />
      <SelectField.Option value="2" display="Two" />
      <SelectField.Option value="3" display="Three" />
      <SelectField.Option value="4" display="Four" />
      <SelectField.Option value="5" display="Five" />
      <SelectField.Option value="6" display="Six" />
      <SelectField.Option value="7" display="Seven" />
      <SelectField.Option value="8" display="Eight" />
      <SelectField.Option value="9" display="Nine" />
      <SelectField.Option value="10" display="Ten" />
      <SelectField.Option value="11" display="Eleven" />
      <SelectField.Option value="12" display="Twelve" />
      <SelectField.Option value="13" display="Thirteen" />
    </SelectField>
  </div>
);

export default SelectFieldMaxheight;
