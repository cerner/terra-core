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
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
  /**
   * The maximum number of list items that can be selected.
   */
  maxSelectionCount: PropTypes.number,
};

const defaultProps = {
  children: [],
  isDivided: false,
  onChange: undefined,
  maxSelectionCount: undefined,
};

class MultiSelectList extends React.Component {

  static selectedIndexesFromItems(items, maxSelectionCount) {
    const selectedIndexes = [];
    for (let i = 0; i < items.length; i += 1) {
      if (selectedIndexes.length >= maxSelectionCount) {
        break;
      }
      if (items[i].props.isSelected) {
        selectedIndexes.push(i);
      }
    }
    return selectedIndexes;
  }

  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.shouldHandleSelection = this.shouldHandleSelection.bind(this);
    this.state = { selectedIndexes: MultiSelectList.selectedIndexesFromItems(this.props.children, this.validatedMaxCount()) };
  }

  handleSelection(event, index) {
    event.preventDefault();

    let newIndexes = [];
    if (this.state.selectedIndexes.length) {
      if (this.state.selectedIndexes.indexOf(index) >= 0) {
        newIndexes = this.state.selectedIndexes.slice();
        newIndexes.splice(newIndexes.indexOf(index), 1);
      } else {
        newIndexes = this.state.selectedIndexes.concat([index]);
      }
    } else {
      newIndexes.push(index);
    }

    this.setState({ selectedIndexes: newIndexes });
    if (this.props.onChange) {
      this.props.onChange(event, newIndexes);
    }
  }

  shouldHandleSelection(index) {
    if (this.state.selectedIndexes.length < this.validatedMaxCount()) {
      return true;
    }
    if (this.state.selectedIndexes.indexOf(index) >= 0) {
      return true;
    }
    return false;
  }

  cloneChildItems(items) {
    const disableUnselectedItems = this.state.selectedIndexes.length >= this.validatedMaxCount();

    return React.Children.map(items, (child, index) => {
      const wrappedOnClick = this.wrappedOnClickForItem(child, index);
      const wrappedOnKeyDown = this.wrappedOnKeyDownForItem(child, index);
      const newProps = this.newPropsForItem(child, index, wrappedOnClick, wrappedOnKeyDown, disableUnselectedItems);

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

  newPropsForItem(item, index, onClick, onKeyDown, disableUnselectedItems) {
    const isSelected = this.state.selectedIndexes.indexOf(index) >= 0;
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

    if (disableUnselectedItems && !isSelected) {
      newProps.isSelectable = false;
    }

    return newProps;
  }

  validatedMaxCount() {
    if (this.props.maxSelectionCount !== undefined) {
      return this.props.maxSelectionCount;
    }
    return this.props.children.length;
  }

  render() {
    const { children, isDivided, onChange, maxSelectionCount, ...customProps } = this.props;
    const clonedChildItems = this.cloneChildItems(children);

    return (
      <List isDivided={isDivided} {...customProps}>
        {clonedChildItems}
      </List>
    );
  }
}

MultiSelectList.propTypes = propTypes;
MultiSelectList.defaultProps = defaultProps;
MultiSelectList.Item = List.Item;

export default MultiSelectList;
