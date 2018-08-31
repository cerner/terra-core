import React from 'react';
import Menu from '../../../../Menu';

class SmallMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
  }

  componentDidMount() {
    this.forceUpdate();
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
          This menu should have a small height. And all items should be visible without scrolling.
        </div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <Menu.Item text="Default 1" key="1" className="TestFirstItem" />
          <Menu.Item text="Default 2" key="2" className="TestLastItem" />
        </Menu>
        <button type="button" id="small-menu-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Menu
        </button>
      </div>
    );
  }
}

export default SmallMenu;
