import React from 'react';
import ButtonGroup from '../../../ButtonGroup';

const LongTextButtonGroup = () => (
  <ButtonGroup id="button-group-text">
    <ButtonGroup.Button text="Text" key="text1" />
    <ButtonGroup.Button text="This button contains a really really really long text. The text should wrap and the height of the button should increase. The height of the all other buttons in the group should match. " key="text2" />
  </ButtonGroup>
);

export default LongTextButtonGroup;
