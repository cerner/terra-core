import React from 'react';

import ButtonGroup from '../../src/ButtonGroup';

export default () => (
  <ButtonGroup
    id="button-group-non-selectable"
    selectedKeys={['non-selectable2']}
  >
    <ButtonGroup.Button text="Not Selectable 1" key="non-selectable1" />
    <ButtonGroup.Button text="Not Selectable 2" key="non-selectable2" />
    <ButtonGroup.Button text="Not Selectable 3" key="non-selectable3" />
    <ButtonGroup.Button text="Not Selectable 4 Disabled" key="non-selectable4" isDisabled />
  </ButtonGroup>
);
