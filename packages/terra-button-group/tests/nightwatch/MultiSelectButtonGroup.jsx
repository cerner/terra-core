import React from 'react';

import ButtonGroup from '../../src/ButtonGroup';

export default () => (
  <ButtonGroup
    id="button-group-multi-select"
    isSelectable
    selectType={ButtonGroup.Opts.selectTypes['MULTI-SELECT']}
  >
    <ButtonGroup.Button text="Mult-Select 1" key="multi-select1" />
    <ButtonGroup.Button text="Mult-Select 2" key="multi-select2" isSelected />
    <ButtonGroup.Button text="Mult-Select 3" key="multi-select3" isSelected />
  </ButtonGroup>
);
