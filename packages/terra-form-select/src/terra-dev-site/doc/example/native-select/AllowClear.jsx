import React from 'react';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';

const AllowClearExample = () => (
  <NativeSelect
    id="allow-clear-example"
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
    placeholder={{ allowClear: true }}
  />
);

export default AllowClearExample;
