import React from 'react';

import ButtonGroup from '../../lib/ButtonGroup';

export default () => (
  <ButtonGroup
    isSelectable
    buttons={[<ButtonGroup.Button text="Compact" key="compact1" />,
      <ButtonGroup.Button text="Compact" key="compact2" isSelected />]}
  />
);
