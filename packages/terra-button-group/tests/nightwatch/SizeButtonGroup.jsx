import React from 'react';

import ButtonGroup from '../../lib/ButtonGroup';

const TinyButtonGroup = () => (
  <ButtonGroup
    size="tiny"
    buttons={[<ButtonGroup.Button text="Tiny" key="tiny1" />,
      <ButtonGroup.Button text="Tiny" key="tiny2" />]}
  />
);
const SmallButtonGroup = () => (
  <ButtonGroup
    size="small"
    buttons={[<ButtonGroup.Button text="Small" key="small1" />,
      <ButtonGroup.Button text="Small" key="small2" />]}
  />
);
const MediumButtonGroup = () => (
  <ButtonGroup
    size="medium"
    buttons={[<ButtonGroup.Button text="Medium" key="medium1" />,
      <ButtonGroup.Button text="Medium" key="medium2" />]}
  />
);
const LargeButtonGroup = () => (
  <ButtonGroup
    size="large"
    buttons={[<ButtonGroup.Button text="Large" key="large1" />,
      <ButtonGroup.Button text="Large" key="large2" />]}
  />
);
const HugeButtonGroup = () => (
  <ButtonGroup
    size="huge"
    buttons={[<ButtonGroup.Button text="Huge" key="huge1" />,
      <ButtonGroup.Button text="Huge" key="huge2" />]}
  />
);

export {
  TinyButtonGroup,
  SmallButtonGroup,
  MediumButtonGroup,
  LargeButtonGroup,
  HugeButtonGroup,
};
