import React from 'react';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';

const PlaceholderExample = () => (
  <NativeSelect
    id="placeholder-example"
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
    placeholder={{}}
  />
);

export default PlaceholderExample;
