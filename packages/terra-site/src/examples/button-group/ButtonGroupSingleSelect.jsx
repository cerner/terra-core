import React from 'react';
import ButtonGroup from 'terra-button-group';

class ButtonGroupSingleSelect extends React.Component {
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
        <ButtonGroup.Button text="Single-Select 1" key="single-select1" />
        <ButtonGroup.Button text="Single-Select 2" key="single-select2" />
        <ButtonGroup.Button text="Single-Select 3" key="single-select3" />
      </ButtonGroup>
    );
  }
}
export default ButtonGroupSingleSelect;
