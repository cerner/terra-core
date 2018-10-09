# Terra Collapsible Menu View

The collapsible menu view is a mechanism that can be used in toolbar scenarios where actionable items will be displayed face-up and flex based on the space available. Any items that can not fit in the available space will be rolled into an ellipsis menu.

CollapsibleMenuView.Item will flex between a button when displayed face-up and a Menu.Item when in a menu. An item can have an onClick action and/or contain menuItems that will be displayed in a menu when clicked (they will be displayed in a submenu if the item is rolled into the ellipsis menu)

CollapsibleMenuView.Toggle will flex between a checkbox with a label when displayed face-up and a selectable Menu.Item when in a menu.

CollapsibleMenuView.ItemGroup will flex between a button group when displayed face-up and a Menu.ItemGroup when rolled into the ellipsis menu. A selectable ItemGroup will have toggle style selection. An Item group that is not slectable will have it's children roll into the ellipsis menu as non selectable Menu.Items.

CollapsibleMenuView.Divider will flex between a vertical divider when displayed face-up and a Menu.Divider when in a menu.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-collapsible-menu-view`

## Usage

```jsx
import React from 'react';
import IconTable from 'terra-icon/lib/icon/IconTable';
import IconFlowsheet from 'terra-icon/lib/icon/IconFlowsheet';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconSend from 'terra-icon/lib/icon/IconSend';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconFolder from 'terra-icon/lib/icon/IconFolder';
import IconTrash from 'terra-icon/lib/icon/IconTrash';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

class CollapsibleMenuViewDemo extends React.Component {
  constructor(props) {
    super(props);
    this.handleDisplayTypeChange = this.handleDisplayTypeChange.bind(this);
    this.handleToggleOneOnChange = this.handleToggleOneOnChange.bind(this);
    this.handleToggleTwoOnChange = this.handleToggleTwoOnChange.bind(this);
    this.state = {
      toggle1Selection: false,
      toggle2Selection: false,
      displayType: 'tableView',
    };
  }

  handleToggleOneOnChange(event, isSelected) {
    this.setState({ toggle1Selection: isSelected });
  }

  handleToggleTwoOnChange(event, isSelected) {
    this.setState({ toggle2Selection: isSelected });
  }

  handleDisplayTypeChange(event, selectedKey) {
    this.setState({ displayType: selectedKey });
  }

  render() {
    return (
      <CollapsibleMenuView>
        <CollapsibleMenuView.Toggle
          text="Toggle Item 1"
          key="toggle1"
          onChange={this.handleToggleOneOnChange}
          isSelected={this.state.toggle1Selection}
        />
        <CollapsibleMenuView.Toggle
          text="Toggle Item 2"
          key="toggle2"
          onChange={this.handleToggleTwoOnChange}
          isSelected={this.state.toggle2Selection}
        />
        <CollapsibleMenuView.Divider key="Divider1" />
        <CollapsibleMenuView.Item
          text="Menu Button 1"
          key="MenuButton1"
          shouldCloseOnClick={false}
          subMenuItems={[
            <CollapsibleMenuView.Item text="Default Item 1" key="defaultItem1" />,
            <CollapsibleMenuView.Item text="Default Item 2" key="defaultItem2" />,
          ]}
        />
        <CollapsibleMenuView.Item
          text="Menu Button 2"
          key="MenuButton 2"
          shouldCloseOnClick={false}
          subMenuItems={[
            <CollapsibleMenuView.Item text="Default Item 1" key="defaultItem1" />,
            <CollapsibleMenuView.Item text="Default Item 2" key="defaultItem2" />,
          ]}
        />
        <CollapsibleMenuView.Divider key="Divider2" />
        <CollapsibleMenuView.ItemGroup key="ViewTypeSelection" onChange={this.handleDisplayTypeChange}>
          <CollapsibleMenuView.Item
            icon={<IconTable />}
            text="Table View"
            key="tableView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.displayType === 'tableView'}
          />
          <CollapsibleMenuView.Item
            icon={<IconFlowsheet />}
            text="Expanded View"
            key="expandedView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.displayType === 'expandedView'}
          />
          <CollapsibleMenuView.Item
            icon={<IconVisualization />}
            text="Trending View"
            key="trendingView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.displayType === 'trendingView'}
          />
        </CollapsibleMenuView.ItemGroup>
        <CollapsibleMenuView.Divider key="Divider3" />
        <CollapsibleMenuView.Item icon={<IconSend />} text="Send Message" key="send" isIconOnly />
        <CollapsibleMenuView.ItemGroup key="messageActionGroup">
          <CollapsibleMenuView.Item icon={<IconPrinter />} text="Print Message" key="print" isIconOnly />
          <CollapsibleMenuView.Item icon={<IconFolder />} text="Move Message to Folder..." key="move" isIconOnly />
          <CollapsibleMenuView.Item icon={<IconTrash />} text="Trash Message" key="trash" isIconOnly />
        </CollapsibleMenuView.ItemGroup>
        <CollapsibleMenuView.Divider key="Divider4" />
        <CollapsibleMenuView.Item text="Button 1" key="button1" />
        <CollapsibleMenuView.Item text="Button 2" key="button2" />
        <CollapsibleMenuView.Item text="Button 3" key="button3" />
        <CollapsibleMenuView.Item text="Button 4" key="button4" />
      </CollapsibleMenuView>
    );
  }
}

export default CollapsibleMenuViewDemo;
```

## Component Features


 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
