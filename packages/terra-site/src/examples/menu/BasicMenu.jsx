import React from 'react';
import Button from 'terra-button';
import Menu from 'terra-menu';
import PropTypes from 'prop-types';

const propTypes = {
  isArrowDisplayed: PropTypes.bool,
  contentWidth: PropTypes.string,
  boundingRef: PropTypes.func,
};

class BasicMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.handleToggle1OnClick = this.handleToggle1OnClick.bind(this);
    this.handleToggle2OnClick = this.handleToggle2OnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      open: false,
      toggle1Selected: false,
      toggle2Selected: false,
      groupSelectedIndex: undefined,
    };
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

  handleToggle1OnClick() {
    this.setState(prevState => ({ toggle1Selected: !prevState.toggle1Selected }));
  }

  handleToggle2OnClick() {
    this.setState(prevState => ({ toggle2Selected: !prevState.toggle2Selected }));
  }

  handleOnChange(event, index) {
    this.setState({ groupSelectedIndex: index });
  }

  render() {
    return (
      <div style={{ display: 'inline-block' }} ref={this.setButtonNode}>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
          contentWidth={this.props.contentWidth}
          isArrowDisplayed={this.props.isArrowDisplayed}
          boundingRef={this.props.boundingRef}
        >
          <Menu.Item
            text="Toggle Item 1"
            key="Toggle1"
            isSelected={this.state.toggle1Selected}
            onClick={this.handleToggle1OnClick}
            isSelectable
          />
          <Menu.Item
            text="Toggle Item 2"
            key="Toggle2"
            isSelected={this.state.toggle2Selected}
            onClick={this.handleToggle2OnClick}
            isSelectable
          />
          <Menu.Divider key="Divider1" />
          <Menu.Item
            text="Nested Menu 1"
            key="Nested1"
            subMenuItems={[
              <Menu.Item text="Alert Action 1.1" key="1.1" onClick={() => alert('Action 1.1')} />,
              <Menu.Item text="Alert Action 1.2" key="1.2" onClick={() => alert('Action 1.2')} />,
              <Menu.Item text="Alert Action 1.3" key="1.3" onClick={() => alert('Action 1.3')} />,
              <Menu.Divider key="Divider1.1" />,
              <Menu.Item text="Close Action 1.1" key="1.4" onClick={this.handleRequestClose} />,
              <Menu.Item text="Close Action 1.2" key="1.5" onClick={this.handleRequestClose} />,
              <Menu.Item text="Close Action 1.3" key="1.6" onClick={this.handleRequestClose} />,
            ]}
          />
          <Menu.Item
            text="Nested Menu 2"
            key="Nested2"
            subMenuItems={[
              <Menu.Item text="Default 2.1" key="2.1" />,
              <Menu.Item text="Default 2.2" key="2.2" />,
              <Menu.Item text="Default 2.3" key="2.3" />,
            ]}
          />
          <Menu.Divider key="Divider2" />
          <Menu.Item text="Alert Action" key="Action1" onClick={() => alert('Action 1')} />
          <Menu.Item text="Close Action" key="Action2" onClick={this.handleRequestClose} />
          <Menu.Divider key="Divider3" />
          <Menu.ItemGroup key="Group" onChange={this.handleOnChange}>
            <Menu.Item text="Group Item 1" key="GroupItem1" isSelected={this.state.groupSelectedIndex === 0} />
            <Menu.Item text="Group Item 2" key="GroupItem2" isSelected={this.state.groupSelectedIndex === 1} />
          </Menu.ItemGroup>
        </Menu>
        <Button onClick={this.handleButtonClick} text="Click Me" />
      </div>
    );
  }
}

BasicMenu.propTypes = propTypes;

export default BasicMenu;
