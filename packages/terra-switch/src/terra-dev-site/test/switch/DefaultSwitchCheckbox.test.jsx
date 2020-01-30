import React, { useState } from 'react';

import Switch from '../../../SwitchCheckBox';

export default () => {
  const [value, setValue] = useState(true);
  return (
    <div className="app">
      <Switch
        id="switchChkId"
        isOn={value}
        labelText="Label"
        onChange={() => { setValue(!value); }}
      />
    </div>
  );
};
