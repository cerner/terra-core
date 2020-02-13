import React, { useState } from 'react';
import Switch from 'terra-switch';

export default () => {
  const [value] = useState(true);
  return (
    <div>
      <Switch
        isOn={value}
        labelText="Label"
        isDisabled
      />
    </div>
  );
};
