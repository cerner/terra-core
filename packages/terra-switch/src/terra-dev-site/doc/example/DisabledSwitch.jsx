import React, { useState } from 'react';
import Switch from 'terra-switch';

export default () => {
  const [isOn] = useState(true);
  return (
    <div>
      <Switch
        isOn={isOn}
        labelText="Label"
        isDisabled
      />
    </div>
  );
};
