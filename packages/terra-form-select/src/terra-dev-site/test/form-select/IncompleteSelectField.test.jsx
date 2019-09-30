import React from 'react';
import SelectField from '../../../SelectField';

const IncompleteSelectFieldExample = () => (
  <SelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="select-field" defaultValue="small">
    <SelectField.Option value="small" display="Small" />
  </SelectField>
);

export default IncompleteSelectFieldExample;
