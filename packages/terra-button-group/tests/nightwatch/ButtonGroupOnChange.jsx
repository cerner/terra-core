import React from 'react';
import ButtonGroup from '../../src/ButtonGroup';

class ButtonGroupOnChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedKey: ['1'] };
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
      <div>
        <h3>Selected Button: <span id="selected-key">{this.state.selectedKey}</span></h3>
        <ButtonGroup
          id="button-group-on-change"
          onChange={this.handleSelection}
          selectedKeys={this.state.selectedKey}
        >
          <ButtonGroup.Button text="Button 1" key="1" />
          <ButtonGroup.Button text="Button 2" key="2" />
          <ButtonGroup.Button text="Button 3" key="3" />
          <ButtonGroup.Button text="Button 4" key="4" />
        </ButtonGroup>
      </div>
    );
  }
}
export default ButtonGroupOnChange;
