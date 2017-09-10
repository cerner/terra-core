import React from 'react';
import Menu from '../../../lib/Menu';

class BoundedMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
    this.state = { open: true };
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  setParentNode(node) {
    this.parentNode = node;
  }

  getParentNode() {
    return this.parentNode;
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div style={{ height: '200px', width: '200px', background: 'aliceblue', overflow: 'hidden' }} ref={this.setParentNode}>
        <Menu
          boundingRef={this.getParentNode}
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
          classNameContent="TestBoundedContent"
        >
          <Menu.Item text="Default 1" key="1" />
          <Menu.Item
            text="Default 2"
            key="2"
            className="TestNestedMenu"
            subMenuItems={[
              <Menu.Item text="Default 2.1" key="2.1" />,
              <Menu.Item text="Default 2.2" key="2.2" />,
              <Menu.Item text="Default 2.3" key="2.3" />,
            ]}
          />
          <Menu.Item text="Default 3" key="3" />
          <Menu.Item text="Default 4" key="4" />
          <Menu.Item text="Default 5" key="5" />
          <Menu.ItemGroup isSelectable onChange={this.handleOnChange} key="6">
            <Menu.Item text="Default 61" key="61" />
            <Menu.Item text="Default 62" key="62" />
            <Menu.Item text="Default 63" key="63" />
          </Menu.ItemGroup>
        </Menu>
        <button id="bounded-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Menu
        </button>
      </div>
    );
  }
}

export default BoundedMenu;
