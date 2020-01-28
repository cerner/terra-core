import React, { useState } from 'react';
import Switch from '../../../SwitchCheckBox';

export default () => {
  const [value, setValue] = useState(true);
  return (
    <div className="app">
      <Switch
        isOn={value}
        labelText="Label"
        onChange={() => { setValue(!value); }}
      />
    </div>
  );
};
