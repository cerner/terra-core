import React from 'react';
import ButtonGroup from 'terra-button-group';

const ButtonGroupCompact = () => (
  <div>
    <ButtonGroup
      isCompact
      buttons={[<ButtonGroup.Button text="Compact" key="compact1" />,
        <ButtonGroup.Button text="Compact" key="compact2" />]}
    />
  </div>
);

export default ButtonGroupCompact;
