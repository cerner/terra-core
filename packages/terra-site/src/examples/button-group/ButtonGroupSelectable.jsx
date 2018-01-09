import React from 'react';
import ButtonGroup from 'terra-button-group';

const ButtonGroupSelectable = () => (
  <div>
    <ButtonGroup isSelectable>
      <ButtonGroup.Button text="Selectable" key="selectable1" />
      <ButtonGroup.Button text="Selectable" key="selectable2" />
    </ButtonGroup>
    <br />
  </div>
);

export default ButtonGroupSelectable;
