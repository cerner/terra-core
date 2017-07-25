import React from 'react';

import ButtonGroup from '../../lib/ButtonGroup';

export default () => (
  <ButtonGroup
    id="button-group-selectable"
    isSelectable
    buttons={[<ButtonGroup.Button text="Selectable" key="selectable1" />,
      <ButtonGroup.Button text="Selectable" key="selectable2" isSelected />]}
  />
);
