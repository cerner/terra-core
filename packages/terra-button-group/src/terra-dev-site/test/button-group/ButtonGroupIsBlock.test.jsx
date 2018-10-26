import React from 'react';
import ButtonGroup from '../../../ButtonGroup';

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
        id="controlled-button-group"
        isBlock
        onChange={this.handleSelection}
        selectedKeys={this.state.selectedKey}
      >
        <ButtonGroup.Button text="Is-Block Single-Select 1" key="single-select1" />
        <ButtonGroup.Button text="Is-Block Single-Select 2 Longer Text" key="single-select2" />
        <ButtonGroup.Button text="Is-Block Single-Select 3 Extremely Long Text to Test Text Wrapping Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" key="single-select3" />
      </ButtonGroup>
    );
  }
}
export default ButtonGroupIsBlock;
