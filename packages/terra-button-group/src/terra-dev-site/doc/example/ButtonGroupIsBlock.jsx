import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ButtonGroup from 'terra-button-group/lib/ButtonGroup';

class ButtonGroupIsBlock extends React.Component {
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
      <ButtonGroup
        id="button-block-group"
        isBlock
        onChange={this.handleSelection}
        selectedKeys={this.state.selectedKeys}
      >
        <ButtonGroup.Button text="Button 1" key="block-select1" />
        <ButtonGroup.Button text="Button 2" key="block-select2" />
        <ButtonGroup.Button text="Button 3" key="block-select3" />
      </ButtonGroup>
    );
  }
}

export default ButtonGroupIsBlock;
