import React from 'react';
import ButtonGroup from 'terra-button-group';

const ButtonGroupIntent = () => (
  <div>
    <div>
      <ButtonGroup
        buttons={[<ButtonGroup.Button text="Default" key="default1" />,
          <ButtonGroup.Button text="Default" key="default2" />]}
      />
    </div>
    <br />
    <div>
      <ButtonGroup
        variant="secondary"
        buttons={[<ButtonGroup.Button text="Secondary" key="secondary1" />,
          <ButtonGroup.Button text="Secondary" key="secondary2" />]}
      />
    </div>
  </div>
);

export default ButtonGroupIntent;
