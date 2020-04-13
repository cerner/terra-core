import React from 'react';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';

const IncompleteExample = () => (
  <NativeSelect
    id="incomplete-example"
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

export default IncompleteExample;
