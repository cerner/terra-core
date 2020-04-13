import React from 'react';
import NativeSelectField from 'terra-form-select/lib/native-select/NativeSelectField';

const DefaultFieldExample = () => (
  <NativeSelectField
    selectId="default-example"
    label="Default Field Text"
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
  />
);

export default DefaultFieldExample;
