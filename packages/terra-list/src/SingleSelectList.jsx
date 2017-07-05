import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import List from './List';

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the child list items should have a border color applied.
   */
  isDivided: PropTypes.bool,
  /**
   * Whether or not the child list items has a disclosure indicator presented.
   */
  hasChevrons: PropTypes.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  children: [],
  isDivided: false,
  hasChevrons: false,
  onChange: undefined,
};

class SingleSelectList extends React.Component {

  static selectedIndexFromItems(items) {
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].props.isSelected) {
        return i;
      }
    }
    return -1;
  }

  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.shouldHandleSelection = this.shouldHandleSelection.bind(this);
    this.state = { selectedIndex: SingleSelectList.selectedIndexFromItems(this.props.children) };
  }

  handleSelection(event, index) {
    event.preventDefault();
    this.setState({ selectedIndex: index });
    if (this.props.onChange) {
      this.props.onChange(event, index);
    }
  }

  shouldHandleSelection(index) {
    return index !== this.state.selectedIndex;
  }

  cloneChildItems(items) {
    return React.Children.map(items, (child, index) => {
      const wrappedOnClick = this.wrappedOnClickForItem(child, index);
      const wrappedOnKeyDown = this.wrappedOnKeyDownForItem(child, index);
      const newProps = this.newPropsForItem(child, index, wrappedOnClick, wrappedOnKeyDown);

      return React.cloneElement(child, newProps);
    });
  }

  wrappedOnClickForItem(item, index) {
    const initialOnClick = item.props.onClick;

    return (event) => {
      // The default isSelectable attribute is either undefined or true, unless the consumer specifies the item isSelectable attribute as false.
      if (item.props.isSelectable !== false && this.shouldHandleSelection(index)) {
        this.handleSelection(event, index);
      }

      if (initialOnClick) {
        initialOnClick(event);
      }
    };
  }

  wrappedOnKeyDownForItem(item, index) {
    const initialOnKeyDown = item.props.onKeyDown;

    return (event) => {
      if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
        // The default isSelectable attribute is either undefined or true, unless the consumer specifies the item isSelectable attribute as false.
        if (item.props.isSelectable !== false && this.shouldHandleSelection(index)) {
          this.handleSelection(event, index);
        }
      }

      if (initialOnKeyDown) {
        initialOnKeyDown(event);
      }
    };
  }

  newPropsForItem(item, index, onClick, onKeyDown) {
    const isSelected = this.state.selectedIndex === index;
    const newProps = { };

    // Set the isSelected attribute to false for all the items except the items whose index is set to state selectedIndex
    if (isSelected !== item.isSelected) {
      newProps.isSelected = isSelected;
    }

    // Set the default isSelectable attribute to true, unless the consumer specifies the item isSelectable attribute as false.
    newProps.isSelectable = true;
    if (item.props.isSelectable === false) {
      newProps.isSelectable = item.props.isSelectable;
    }

    // If selectable, add tabIndex on items to navigate through keyboard tab key for selectable lists and add
    // onClick and onKeyDown functions.
    if (newProps.isSelectable) {
      newProps.tabIndex = '0';
      newProps.onClick = onClick;
      newProps.onKeyDown = onKeyDown;
    }

    // Uses the props.hasChevron value, unless the consumer specifies the item hasChevron attribute as false.
    newProps.hasChevron = this.props.hasChevrons;
    if (item.props.hasChevron !== undefined) {
      newProps.hasChevron = item.props.hasChevron;
    }

    return newProps;
  }

  render() {
    const { children, isDivided, onChange, hasChevrons, ...customProps } = this.props;
    const clonedChildItems = this.cloneChildItems(children);

    return (
      <List isDivided={isDivided} {...customProps}>
        {clonedChildItems}
      </List>
    );
  }
}

SingleSelectList.propTypes = propTypes;
SingleSelectList.defaultProps = defaultProps;
SingleSelectList.Item = List.Item;

export default SingleSelectList;
