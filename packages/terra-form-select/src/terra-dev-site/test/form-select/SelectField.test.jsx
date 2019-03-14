import React from 'react';
import SelectField from '../../../SelectField';

const SelectFieldExample = () => (
  <SelectField label="T-shirt size" placeholder="Select a size" selectId="select-field" defaultValue="small">
    <SelectField.Option value="xSmall" display="Extra Small" />
    <SelectField.Option value="small" display="Small" />
    <SelectField.Option value="medium" display="Medium" />
    <SelectField.Option value="large" display="Large" />
    <SelectField.Option value="xLarge" display="Extra Large" />
  </SelectField>
);

export default SelectFieldExample;
