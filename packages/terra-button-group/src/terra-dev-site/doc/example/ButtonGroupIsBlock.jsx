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
    this.setState(prevState => ({ selectedKeys: ButtonGroup.Utils.handleMultiSelectedKeys(prevState.selectedKeys, key) }));
  }

  render() {
    return (
      <ButtonGroup
        id="button-block-group"
        isBlock
        onChange={this.handleSelection}
        selectedKeys={this.state.selectedKey}
      >
        <ButtonGroup.Button text="Is-Block Select 1" key="block-select1" />
        <ButtonGroup.Button text="Is-Block Select 2 Longer Text" key="block-select2" />
        <ButtonGroup.Button text="Is-Block Select 3 Extremely Long Text to Test Text Wrapping Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" key="block-select3" />
      </ButtonGroup>
    );
  }
}

export default ButtonGroupIsBlock;
