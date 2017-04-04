import React from 'react';
import ButtonGroup from 'terra-button-group';

// eslint-disable-next-line no-alert
const onClick = () => alert('Ive been clicked!');

const ButtonGroupOnClick = () => (
  <ButtonGroup
    buttons={[<ButtonGroup.Button text="Default" onClick={onClick} key="default1" />,
      <ButtonGroup.Button text="Default" onClick={onClick} key="default2" />]}
  />
);

export default ButtonGroupOnClick;
