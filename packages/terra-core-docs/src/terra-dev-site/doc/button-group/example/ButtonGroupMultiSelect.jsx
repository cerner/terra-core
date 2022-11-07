import React from 'react';
import ButtonGroup from 'terra-button-group';

class ButtonGroupMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedKeys: ['multi-select1', 'multi-select3'] };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, key) {
    event.preventDefault();
    this.setState(prevState => ({ selectedKeys: ButtonGroup.Utils.handleMultiSelectedKeys(prevState.selectedKeys, key) }));
  }

  render() {
    return (
      <ButtonGroup
        id="button-group-multi-select"
        onChange={this.handleSelection}
        selectedKeys={this.state.selectedKeys}
        isMultiSelect
      >
        <ButtonGroup.Button text="Dust Allergy" key="multi-select1" />
        <ButtonGroup.Button text="Food Allergy" key="multi-select2" />
        <ButtonGroup.Button text="Pet Allergy" key="multi-select3" />
      </ButtonGroup>
    );
  }
}

export default ButtonGroupMultiSelect;
