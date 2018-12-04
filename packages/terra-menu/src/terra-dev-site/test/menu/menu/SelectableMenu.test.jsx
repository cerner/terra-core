import React from 'react';
import Menu from '../../../../Menu';

class SelectableMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <div>
          This menu contains one selectable child (an Item Group). The menu should allow space for the checkmark and the items in the item group should be selectable.
        </div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <Menu.ItemGroup className="TestGroup" onChange={this.handleSelection} key="selectable-group">
            <Menu.Item text="Group Item 1" key="1" className="TestGroupItem1" />
            <Menu.Item text="Group Item 2" key="2" className="TestGroupItem2" />
            <Menu.Item text="Group Item 3" key="3" className="TestGroupItem3" />
          </Menu.ItemGroup>
        </Menu>
        <button type="button" id="selectable-menu-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Menu
        </button>
      </div>
    );
  }
}

export default SelectableMenu;
