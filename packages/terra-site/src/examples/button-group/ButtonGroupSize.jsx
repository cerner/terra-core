import React from 'react';
import ButtonGroup from 'terra-button-group';

const ButtonGroupSize = () => (
  <div>
    <div>
      <ButtonGroup
        size="tiny"
        buttons={[<ButtonGroup.Button text="Tiny" key="tiny1" />,
          <ButtonGroup.Button text="Tiny" key="tiny2" />]}
      />
    </div>
    <br />
    <div>
      <ButtonGroup
        size="small"
        buttons={[<ButtonGroup.Button text="Small" key="small1" />,
          <ButtonGroup.Button text="Small" key="small2" />]}
      />
    </div>
    <br />
    <div>
      <ButtonGroup
        size="medium"
        buttons={[<ButtonGroup.Button text="Medium" key="medium1" />,
          <ButtonGroup.Button text="Medium" key="medium2" />]}
      />
    </div>
    <br />
    <div>
      <ButtonGroup
        size="large"
        buttons={[<ButtonGroup.Button text="Large" key="large1" />,
          <ButtonGroup.Button text="Large" key="large2" />]}
      />
    </div>
    <br />
    <div>
      <ButtonGroup
        size="huge"
        buttons={[<ButtonGroup.Button text="Huge" key="huge1" />,
          <ButtonGroup.Button text="Huge" key="huge2" />]}
      />
    </div>
  </div>
);

export default ButtonGroupSize;
