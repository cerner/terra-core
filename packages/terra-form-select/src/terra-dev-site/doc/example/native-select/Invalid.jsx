import React from 'react';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';

const InvalidExample = () => (
  <NativeSelect
    id="invalid-example"
    invalid
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
  />
);

export default InvalidExample;
