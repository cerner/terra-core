import React from 'react';
import ButtonGroup from 'terra-button-group';

class ButtonGroupDisabledButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedKey: ['single-select1'] };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedKey) {
    if (ButtonGroup.Utils.shouldHandleSingleSelection(this.state.selectedKey, selectedKey)) {
      event.preventDefault();
      this.setState({ selectedKey: [selectedKey] });
    }
  }

  render() {
    return (
      <ButtonGroup
        id="controlled-button-group"
        onChange={this.handleSelection}
        selectedKeys={this.state.selectedKey}
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
