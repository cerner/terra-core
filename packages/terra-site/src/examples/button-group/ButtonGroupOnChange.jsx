import React from 'react';
import ButtonGroup from 'terra-button-group';

// eslint-disable-next-line no-alert
const onChange = () => alert('My selected button changed!');

const ButtonGroupOnChange = () => (
  <ButtonGroup
    isSelectable
    onChange={onChange}
    buttons={[<ButtonGroup.Button text="Selectable" key="selectable1" />,
      <ButtonGroup.Button text="Selectable" key="selectable2" />]}
  />
);

export default ButtonGroupOnChange;
