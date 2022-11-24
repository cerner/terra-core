import React from 'react';
import Card from 'terra-card';
import SelectField from 'terra-form-select/lib/SelectField';
import classNames from 'classnames/bind';
import styles from './FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const SelectFieldExample = () => (
  <Card>
    <Card.Body>
      <SelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" className={cx('form-select')}>
        <SelectField.Option value="xSmall" display="Extra Small" />
        <SelectField.Option value="small" display="Small" />
        <SelectField.Option value="medium" display="Medium" />
        <SelectField.Option value="large" display="Large" />
        <SelectField.Option value="xLarge" display="Extra Large" />
      </SelectField>
    </Card.Body>
  </Card>
);

export default SelectFieldExample;
