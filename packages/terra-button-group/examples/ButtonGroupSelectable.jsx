import React from 'react';
import ButtonGroup from '../src/ButtonGroup';

const ButtonGroupSelectable = () => (
  <div>
    <div>
      <ButtonGroup
        isSelectable
        buttons={[<ButtonGroup.Button text="Selectable" key="selectable1" />,
          <ButtonGroup.Button text="Selectable" key="selectable2" />]}
      />
    </div>
  </div>
);

export default ButtonGroupSelectable;
