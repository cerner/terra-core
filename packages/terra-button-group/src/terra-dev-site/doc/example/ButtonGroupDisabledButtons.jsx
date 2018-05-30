import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ButtonGroup from 'terra-button-group/lib/ButtonGroup';

class ButtonGroupDisabledButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedKey: ['single-select1'] };
  }

  render() {
    return (
      <ButtonGroup
        id="controlled-button-group"
      >
        <ButtonGroup.Button text="Button 1" key="1" />
        <ButtonGroup.Button text="Button 2 - Disabled" key="2" isDisabled />
        <ButtonGroup.Button text="Button 3" key="3" />
        <ButtonGroup.Button text="Button 4 Disabled" key="4" isDisabled />
      </ButtonGroup>
    );
  }
}
export default ButtonGroupDisabledButtons;
