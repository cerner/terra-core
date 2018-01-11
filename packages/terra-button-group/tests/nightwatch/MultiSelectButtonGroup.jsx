import React from 'react';

import ButtonGroup from '../../src/ButtonGroup';

export default () => (
  <ButtonGroup
    id="button-group-multi-select"
    selectedKeys={['multi-select3', 'multi-select1']}
    selectType={ButtonGroup.Opts.selectTypes['MULTI-SELECT']}
  >
    <ButtonGroup.Button text="Mult-Select 1" key="multi-select1" />
    <ButtonGroup.Button text="Mult-Select 2" key="multi-select2" />
    <ButtonGroup.Button text="Mult-Select 3" key="multi-select3" />
    <ButtonGroup.Button text="Mult-Select 4 Disabled" key="multi-select-4" isDisabled />
  </ButtonGroup>
);
