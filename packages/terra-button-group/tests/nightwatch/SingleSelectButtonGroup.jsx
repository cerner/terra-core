import React from 'react';

import ButtonGroup from '../../src/ButtonGroup';

export default () => (
  <ButtonGroup
    id="button-group-selectable"
    isSelectable
  >
    <ButtonGroup.Button text="Single-Select 1" key="single-select1" />
    <ButtonGroup.Button text="Single-Select 2" key="single-select2" isSelected />
  </ButtonGroup>
);
