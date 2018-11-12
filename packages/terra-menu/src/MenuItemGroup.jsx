import React from 'react';
import PropTypes from 'prop-types';
import List, { Utils } from 'terra-list';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * Menu.Items to be grouped together.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function called when selected index changes.
   */
  onChange: PropTypes.func,
};

const childContextTypes = {
  isGroupItem: PropTypes.bool,
};

const initialSingleSelectedIndex = (children) => {
  const childArray = React.Children.toArray(children);
  for (let i = 0; i < childArray.length; i += 1) {
    if (childArray[i].props.isSelected) {
      return i;
    }
  }
  return -1;
};

class MenuItemGroup extends React.Component {
  constructor(props) {
    super(props);
    this.cloneChildren = this.cloneChildren.bind(this);
    this.handleItemSelection = this.handleItemSelection.bind(this);
    this.state = { selectedIndex: initialSingleSelectedIndex(props.children) };
  }

  getChildContext() {
    return { isGroupItem: true };
  }

  handleItemSelection(event, metaData) {
    if (this.state.selectedIndex !== metaData.index) {
      event.preventDefault();
      this.setState({ selectedIndex: metaData.index });
      if (this.props.onChange) {
        this.props.onChange(event, metaData.index);
      }
    }
  }

  cloneChildren(children) {
    return React.Children.map(children, (child, index) => {
      let isSelectable = true;
      if (child.props.isSelectable === false) {
        isSelectable = false;
      }
      return React.cloneElement(child, {
        isSelectable,
        isSelected: this.state.selectedIndex === index,
        onClick: Utils.wrappedOnClickForItem(child.props.onKeyDown, this.handleItemSelection, { index }),
        onKeyDown: Utils.wrappedOnKeyDownForItem(child.props.onClick, this.handleItemSelection, { index }),
      });
    });
  }

  render() {
    const { children, ...customProps } = this.props;
    const managedChildren = this.cloneChildren(children);

    return (
      <List {...customProps} role="group">
        {managedChildren}
      </List>
    );
  }
}

MenuItemGroup.propTypes = propTypes;
MenuItemGroup.childContextTypes = childContextTypes;

export default MenuItemGroup;
