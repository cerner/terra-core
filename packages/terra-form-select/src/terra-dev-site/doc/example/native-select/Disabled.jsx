import React from 'react';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';

const DisabledExample = () => (
  <NativeSelect
    id="disabled-example"
    disabled
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
  />
);

export default DisabledExample;
