import React from 'react';
import ButtonGroup from '../../../ButtonGroup';

class ButtonGroupMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedKeys: [] };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, key) {
    event.preventDefault();
    this.setState((prevState) => ({ selectedKeys: ButtonGroup.Utils.handleMultiSelectedKeys(prevState.selectedKeys, key) }));
  }

  render() {
    return (
      <div>
        <h3>
          Selected Button(s):
          {' '}
          <span id="selected-keys">{this.state.selectedKeys.join(', ')}</span>
        </h3>
        <ButtonGroup
          id="button-group-multi-select"
          onChange={this.handleSelection}
          selectedKeys={this.state.selectedKeys}
        >
          <ButtonGroup.Button text="Multi-Select 1" key="1" />
          <ButtonGroup.Button text="Multi-Select 2" key="2" />
          <ButtonGroup.Button text="Multi-Select 3" key="3" />
          <ButtonGroup.Button text="Multi-Select 4" key="4" />
        </ButtonGroup>
      </div>
    );
  }
}

export default ButtonGroupMultiSelect;
