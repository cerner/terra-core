import React from 'react';
import NativeSelectField from 'terra-form-select/lib/native-select/NativeSelectField';

const RequiredFieldExample = () => (
  <NativeSelectField
    selectId="required-example"
    label="Required Field Text"
    required
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
    placeholder={{}}
  />
);

export default RequiredFieldExample;
