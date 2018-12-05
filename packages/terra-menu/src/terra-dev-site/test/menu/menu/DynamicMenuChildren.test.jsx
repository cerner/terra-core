import React from 'react';
import Menu from '../../../../Menu';

class DefaultMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.addMenuItems = this.addMenuItems.bind(this);
    this.removeMenuItems = this.removeMenuItems.bind(this);
    this.state = {
      open: false,
      items: [0],
    };
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

  addMenuItems() {
    this.setState(prevState => ({
      items: [...prevState.items, prevState.items.length],
    }));
  }

  removeMenuItems() {
    this.setState((prevState) => {
      const newItems = prevState.items.slice();
      newItems.pop();
      return { items: newItems };
    });
  }

  render() {
    return (
      <div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          {
            this.state.items.map(item => (
              <Menu.Item key={item} text={`Menu Item ${item}`} id={`TestContent${item}`} />
            ))
          }
        </Menu>
        <button type="button" id="default-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Menu
        </button>
        <br />
        <button type="button" id="add-button" onClick={this.addMenuItems}>
          Add Menu Item
        </button>
        <button type="button" id="remove-button" onClick={this.removeMenuItems}>
          Remove Menu Item
        </button>
      </div>
    );
  }
}

export default DefaultMenu;
