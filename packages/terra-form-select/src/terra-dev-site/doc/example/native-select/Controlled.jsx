import React, { useState } from 'react';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';

const ControlledExample = () => {
  const [value, setValue] = useState('volvo');

  return (
    <NativeSelect
      id="controlled-example"
      value={value}
      onChange={event => setValue(event.currentTarget.value)}
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes' },
        { value: 'audi', display: 'Audi' },
      ]}
    />
  );
};

export default ControlledExample;
