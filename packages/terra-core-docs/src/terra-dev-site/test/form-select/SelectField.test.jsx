import React from 'react';
import classNames from 'classnames/bind';
import SelectField from 'terra-form-select/lib/SelectField';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const SelectFieldExample = () => (
  <div className={cx('content-wrapper')}>
    <SelectField label="Allergies Hospitals" placeholder="Select a location" selectId="select-field">
      <SelectField.Option value="kc" display="Cerner, Kansas City, MO" />
      <SelectField.Option value="riverport" display="Cerner Corporation - Riverport Campus" />
      <SelectField.Option value="innovation" display="Cerner Corporation - Innovation Campus" />
      <SelectField.Option value="realization" display="Cerner Corporation - Realization Campus" />
    </SelectField>
  </div>
);

export default SelectFieldExample;
