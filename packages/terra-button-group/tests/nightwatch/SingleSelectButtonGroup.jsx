import React from 'react';

import ButtonGroup from '../../src/ButtonGroup';

export default () => (
  <ButtonGroup
    id="button-group-single-select"
    isSelectable
    selectType={ButtonGroup.Opts.selectTypes['SINGLE-SELECT']}
  >
    <ButtonGroup.Button text="Single-Select 1" key="single-select1" />
    <ButtonGroup.Button text="Single-Select 2" key="single-select2" isSelected />
    <ButtonGroup.Button text="Single-Select 3" key="single-select3" />
    <ButtonGroup.Button text="Single-Select 4 Disabled" key="single-select4" isDisabled />
  </ButtonGroup>
);
