import React, { useState } from 'react';

import Switch from '../../../Switch';

export default () => {
  const [value, setValue] = useState(true);
  return (
    <div className="app">
      <Switch
        isOn={value}
        labelText="Lorem ipsum dolor sit amet consectetur adipisicing label"
        onChange={() => setValue(!value)}
      />
    </div>
  );
};
