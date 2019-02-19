import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SelectField from 'terra-form-select/lib/SelectField';

const MaxSelectionExample = () => (
  <SelectField label="Colors" maxSelectionCount={3} placeholder="Select a size" selectId="select-field" variant="multiple" style={{ maxWidth: '300px' }}>
    <SelectField.OptGroup label="Shade of blue">
      <SelectField.Option value="blue" display="Blue" />
      <SelectField.Option value="cyan" display="Cyan" />
      <SelectField.Option value="teal" display="Teal" />
      <SelectField.Option value="azul" display="Azul" />
      <SelectField.Option value="aqua" display="Aqua" />
    </SelectField.OptGroup>
    <SelectField.OptGroup label="Shades of green">
      <SelectField.Option value="green" display="Green" />
      <SelectField.Option value="forest" display="Forest Green" />
      <SelectField.Option value="dark" display="Dark Green" />
      <SelectField.Option value="neon" display="Neon Green" />
    </SelectField.OptGroup>
  </SelectField>
);

export default MaxSelectionExample;
