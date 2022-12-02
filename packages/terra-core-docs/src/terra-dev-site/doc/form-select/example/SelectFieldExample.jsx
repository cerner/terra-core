import React from 'react';
import Card from 'terra-card';
import SelectField from 'terra-form-select/lib/SelectField';
import classNames from 'classnames/bind';
import styles from './FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const SelectFieldExample = () => (
  <Card>
    <Card.Body>
      <SelectField label="Allergies Hospital Locations" placeholder="Select clinic for location" selectId="Hospital-location-field" className={cx('form-select')}>
        <SelectField.Option value="Kansas,MO" display="Cerner,Kansas City, MO" />
        <SelectField.Option value="Riverport Campus, MO" display="Cerner Corporation - Riverport Campus" />
        <SelectField.Option value="Innovations Campus, MO" display="Cerner Corporation - Innovations Campus" />
        <SelectField.Option value="Realization Campus, MO" display="Cerner Corporation - Realization Campus" />
      </SelectField>
    </Card.Body>
  </Card>
);

export default SelectFieldExample;
