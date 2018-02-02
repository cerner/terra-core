import React from 'react';
import ButtonGroup from '../../lib/ButtonGroup';

const iconStyle = { backgroundColor: 'black', height: '1em', width: '1em' };
const icon = <span style={iconStyle} className="test"><svg width="1em" height="1em"><rect width="1em" height="1em" /></svg></span>;

const TextButtonGroup = () => (
  <ButtonGroup id="button-group-text">
    <ButtonGroup.Button text="Text1" key="text1" />
    <ButtonGroup.Button text="Text2" key="text2" />
  </ButtonGroup>
);

const IconButtonGroup = () => (
  <ButtonGroup id="button-group-icon">
    <ButtonGroup.Button text="Text1" icon={icon} key="icon1" />
    <ButtonGroup.Button text="Text2" icon={icon} key="icon2" />
  </ButtonGroup>
);

const LongTextButtonGroup = () => (
  <ButtonGroup id="button-group-text">
    <ButtonGroup.Button text="Text" key="text1" />
    <ButtonGroup.Button text="This button contains a really really really long text. The text should wrap and the height of the button should increase. The height of the all other buttons in the group should match. " key="text2" />
  </ButtonGroup>
);

export {
  TextButtonGroup,
  IconButtonGroup,
  LongTextButtonGroup,
};
