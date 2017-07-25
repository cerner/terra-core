import React from 'react';

import ButtonGroup from '../../lib/ButtonGroup';

export default () => (
  <ButtonGroup
    id="button-group-compact"
    isCompact
    buttons={[<ButtonGroup.Button text="Compact" key="compact1" />,
      <ButtonGroup.Button text="Compact" key="compact2" />]}
  />
);
