import React from 'react';
import ButtonGroup from 'terra-button-group';

const ButtonGroupCompact = () => (
  <ButtonGroup
    isCompact
    buttons={[<ButtonGroup.Button text="Compact" key="compact1" />,
      <ButtonGroup.Button text="Compact" key="compact2" />]}
  />
);

export default ButtonGroupCompact;
