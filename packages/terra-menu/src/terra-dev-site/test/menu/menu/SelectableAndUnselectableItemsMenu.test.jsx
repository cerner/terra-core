import React from 'react';
import Menu from '../../../../Menu';

class SelectableMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false, isSelected: false };
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

  handleItemClick() {
    this.setState(prevState => ({ isSelected: !prevState.isSelected }));
    this.handleRequestClose();
  }

  render() {
    return (
      <div>
        <div>
          This menu contains a selectable item and an unselectable item. All items in the menu should have the same spacing on the left to allow for a checkmark.
        </div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <Menu.Item
            text="Default 1"
            key="1"
            className="TestNonSelectableItem"
          />
          <Menu.Item
            text="Default 2"
            key="2"
            isSelectable
            className="TestSelectableItem"
            isSelected={this.state.isSelected}
            onClick={this.handleItemClick}
          />
        </Menu>
        <button type="button" id="default-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Menu
        </button>
      </div>
    );
  }
}

export default SelectableMenu;
