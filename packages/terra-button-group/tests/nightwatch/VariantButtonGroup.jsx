import React from 'react';

import ButtonGroup from '../../lib/ButtonGroup';

const DefaultButtonGroup = () => (
  <ButtonGroup
    id="button-group-variant"
    buttons={[<ButtonGroup.Button text="Default" key="default1" />,
      <ButtonGroup.Button text="Default" key="default2" />]}
  />
);
const SecondaryButtonGroup = () => (
  <ButtonGroup
    id="button-group-variant-secondary"
    variant="secondary"
    buttons={[<ButtonGroup.Button text="Secondary" key="secondary1" />,
      <ButtonGroup.Button text="Secondary" key="secondary2" />]}
  />
);

export {
  DefaultButtonGroup,
  SecondaryButtonGroup,
};
