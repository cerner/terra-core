import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ButtonGroup from 'terra-button-group/lib/ButtonGroup';

export default () => (
  <ButtonGroup id="button-group-not-selectable" >
    <ButtonGroup.Button text="Button 1" key="1" />
    <ButtonGroup.Button text="Button 2" key="2" isDisabled />
    <ButtonGroup.Button text="Button 3" key="3" />
    <ButtonGroup.Button text="Button 4" key="4" isDisabled />
  </ButtonGroup>
);
