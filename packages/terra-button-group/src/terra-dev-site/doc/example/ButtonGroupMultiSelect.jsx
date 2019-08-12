import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ButtonGroup from 'terra-button-group/lib/ButtonGroup';

class ButtonGroupMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedKeys: ['multi-select1', 'multi-select3'] };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, key) {
    event.preventDefault();
    this.setState((prevState) => ({ selectedKeys: ButtonGroup.Utils.handleMultiSelectedKeys(prevState.selectedKeys, key) }));
  }

  render() {
    return (
      <ButtonGroup
        id="button-group-multi-select"
        onChange={this.handleSelection}
        selectedKeys={this.state.selectedKeys}
      >
        <ButtonGroup.Button text="Multi-Select 1" key="multi-select1" />
        <ButtonGroup.Button text="Multi-Select 2" key="multi-select2" />
        <ButtonGroup.Button text="Multi-Select 3" key="multi-select3" />
      </ButtonGroup>
    );
  }
}

export default ButtonGroupMultiSelect;
