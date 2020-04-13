import React from 'react';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';

const OptGroupExample = () => (
  <NativeSelect
    id="opt-group-example"
    options={[
      {
        display: 'Swedish Cars',
        childOptions: [
          { value: 'volvo', display: 'Volvo' },
          { value: 'saab', display: 'Saab' },
        ],
      },
      {
        display: 'German Cars',
        childOptions: [
          { value: 'mercedes', display: 'Mercedes' },
          { value: 'audi', display: 'Audi' },
        ],
      },
    ]}
  />
);

export default OptGroupExample;
