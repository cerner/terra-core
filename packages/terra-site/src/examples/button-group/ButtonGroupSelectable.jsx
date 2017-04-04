import React from 'react';
import ButtonGroup from 'terra-button-group';

const ButtonGroupSelectable = () => (
  <div>
    <ButtonGroup
      isSelectable
      buttons={[<ButtonGroup.Button text="Selectable" key="selectable1" />,
        <ButtonGroup.Button text="Selectable" key="selectable2" />]}
    />
    <br />
    <br />
    <ButtonGroup
      isSelectable
      variant="secondary"
      buttons={[<ButtonGroup.Button text="Selectable" key="selectable1" />,
        <ButtonGroup.Button text="Selectable" key="selectable2" />]}
    />
  </div>
);

export default ButtonGroupSelectable;
