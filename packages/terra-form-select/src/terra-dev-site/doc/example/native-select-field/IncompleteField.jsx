import React from 'react';
import NativeSelectField from 'terra-form-select/lib/native-select/NativeSelectField';

const IncompleteFieldExample = () => (
  <NativeSelectField
    selectId="incomplete-example"
    label="Incomplete Field Text"
    required
    isIncomplete
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
    placeholder={{}}
  />
);

export default IncompleteFieldExample;
