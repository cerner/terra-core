import React, { useState } from 'react';
import Switch from '../../../SwitchButton';

export default () => {
  const [value, setValue] = useState(true);
  return (
    <div className="app">
      <Switch
        isOn={value}
        labelText="Label"
        onClick={() => { setValue(!value); }}
      />
    </div>
  );
};
