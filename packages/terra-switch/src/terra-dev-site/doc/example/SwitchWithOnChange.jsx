import React, { useState } from 'react';
import Switch from 'terra-switch';

export default () => {
  const [value, setValue] = useState(true); // makes switch on by default
  return (
    <div>
      <Switch
        id="defaultSwitchOn"
        labelId="label3"
        checked={value}
        label="Label"
        onChange={(event, checked) => { setValue(!checked); }}
      />
    </div>
  );
};
