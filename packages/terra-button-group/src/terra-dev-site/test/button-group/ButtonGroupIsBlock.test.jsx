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
        <ButtonGroup.Button text="Button 1" key="single-select1" />
        <ButtonGroup.Button text="Button 2" key="single-select2" />
        <ButtonGroup.Button text="Button 3" key="single-select3" />
      </ButtonGroup>
    );
  }
}
export default ButtonGroupIsBlock;
