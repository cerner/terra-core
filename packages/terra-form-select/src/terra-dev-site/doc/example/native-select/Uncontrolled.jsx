import React from 'react';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';

const UncontrolledExample = () => (
  <NativeSelect
    id="uncontrolled-example"
    options={[
      { value: 'volvo', display: 'Volvo' },
      { value: 'saab', display: 'Saab' },
      { value: 'mercedes', display: 'Mercedes' },
      { value: 'audi', display: 'Audi' },
    ]}
  />
);

export default UncontrolledExample;
