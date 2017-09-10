import React from 'react';
import Menu from '../../../lib/Menu';

class MediumMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: true };
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
          This menu should have a medium height. And all items should be visible without scrolling.
        </div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <Menu.Item text="Default 1" key="1" className="TestFirstItem" />
          <Menu.Item text="Default 2" key="2" />
          <Menu.Item text="Default 3" key="3" />
          <Menu.Item text="Default 4" key="4" />
          <Menu.Item text="Default 5" key="5" />
          <Menu.ItemGroup key="6">
            <Menu.Item text="Default 61" key="61" />
            <Menu.Item text="Default 62" key="62" />
            <Menu.Item text="Default 63" key="63" />
          </Menu.ItemGroup>
          <Menu.Item text="Default 7" key="7" />
          <Menu.Item text="Default 8" key="8" />
          <Menu.Item text="Default 9" key="9" />
          <Menu.Item text="Default 10" key="10" />
          <Menu.Item text="Default 11" key="11" />
          <Menu.Item text="Default 12" key="12" />
          <Menu.Item text="Default 13" key="13" />
          <Menu.Item text="Default 14" key="14" />
          <Menu.ItemGroup key="15">
            <Menu.Item text="Default 151" key="151" />
            <Menu.Item text="Default 152" key="152" />
            <Menu.Item text="Default 153" key="153" className="TestLastItem" />
          </Menu.ItemGroup>
        </Menu>
        <button id="default-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Menu
        </button>
      </div>
    );
  }
}

export default MediumMenu;
