import React from 'react';
import SelectField from '../../../SelectField';

const MaxSelectionExample = () => (
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
      <SelectField.Option disabled={true} value="teal" display="Teal" />
      <SelectField.Option value="azul" display="Azul" />
      <SelectField.Option value="aqua" display="Aqua" />
    </SelectField.OptGroup>
    <SelectField.OptGroup label="Shades of Green">
      <SelectField.Option value="green" display="Green" />
      <SelectField.Option value="forest" display="Forest Green" />
      <SelectField.Option disabled={true} value="dark" display="Dark Green" />
      <SelectField.Option value="neon" display="Neon Green" />
      <SelectField.Option value="emerald" display="Emerald" />
    </SelectField.OptGroup>
  </SelectField>
);

export default MaxSelectionExample;
