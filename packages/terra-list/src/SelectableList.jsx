import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import List from './List';
import SelectableUtils from './SelectableUtils';

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
   * Whether or not unselected items should be disabled.
   */
  disableUnselectedItems: PropTypes.bool,
  /**
   * Whether or not the child list items has a disclosure indicator presented.
   */
  hasChevrons: PropTypes.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
  /**
   * An array of the currectly selected indexes
   */
  selectedIndexes: PropTypes.array,
};

const defaultProps = {
  children: [],
  disableUnselectedItems: false,
  isDivided: false,
  hasChevrons: false,
  onChange: undefined,
  selectedIndexes: [],
};

class SelectableList extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event, index) {
    if (this.props.onChange) {
      this.props.onChange(event, index);
    }
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
      if (item.props.isSelectable !== false) {
        this.handleOnChange(event, index);
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
        if (item.props.isSelectable !== false) {
          this.handleOnChange(event, index);
        }
      }

      if (initialOnKeyDown) {
        initialOnKeyDown(event);
      }
    };
  }

  newPropsForItem(item, index, onClick, onKeyDown) {
    const isSelected = this.props.selectedIndexes.indexOf(index) >= 0;
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

    if (this.props.disableUnselectedItems && !isSelected) {
      newProps.isSelectable = false;
    }

    // If selectable, add tabIndex on items to navigate through keyboard tab key for selectable lists and add
    // onClick and onKeyDown functions.
    if (newProps.isSelectable) {
      newProps.tabIndex = '0';
      newProps.onClick = onClick;
      newProps.onKeyDown = onKeyDown;
    }

    // Uses the props.hasChevron value, unless the consumer specifies the item hasChevron attribute as false.
    if (this.props.hasChevrons) {
      newProps.hasChevron = this.props.hasChevrons;
    }
    if (item.props.hasChevron !== undefined) {
      newProps.hasChevron = item.props.hasChevron;
    }

    return newProps;
  }

  render() {
    const { children, disableUnselectedItems, isDivided, onChange, hasChevrons, selectedIndexes, ...customProps } = this.props;
    const clonedChildItems = this.cloneChildItems(children);

    return (
      <List isDivided={isDivided} {...customProps}>
        {clonedChildItems}
      </List>
    );
  }
}

SelectableList.propTypes = propTypes;
SelectableList.defaultProps = defaultProps;
SelectableList.Item = List.Item;
SelectableList.Utils = SelectableUtils;

export default SelectableList;
