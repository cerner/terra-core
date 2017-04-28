import React, { PropTypes } from 'react';
import 'terra-base/lib/baseStyles';
import List from './List';

const KEYCODES = {
  ENTER: 13,
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

      if (items[i].props.isSelected && items[i].props.isSelectable !== false) {
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

  componentWillReceiveProps(nextProps) {
    const nextIndexes = MultiSelectList.selectedIndexesFromItems(nextProps.children, this.validatedMaxCount());

    if (this.shouldUpdateIndexes(nextIndexes)) {
      this.setState({ selectedIndexes: nextIndexes });
    }
  }

  shouldUpdateIndexes(indexes) {
    if (indexes.length !== this.state.selectedIndexes.length) {
      return true;
    }

    for (let i = indexes.length - 1; i >= 0; i -= 1) {
      if (this.state.selectedIndexes.indexOf(indexes[i]) >= 0) {
        return true;
      }
    }

    return false;
  }

  handleSelection(event, index) {
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
  }

  shouldHandleSelection(index) {
    if (this.state.selectedIndexes.length <= this.validatedMaxCount()) {
      return true;
    }
    if (this.state.selectedIndexes.indexOf(index) >= 0) {
      return true;
    }
    return false;
  }

  cloneChildItems(items) {
    const disableUnselectedItems = this.state.selectedIndexes.length >= this.validatedMaxCount();

    return items.map((item, index) => {
      const wrappedOnClick = this.wrappedOnClickForItem(item, index);
      const wrappedOnKeyDown = this.wrappedOnKeyDownForItem(item, index);
      const newProps = this.newPropsForItem(item, index, wrappedOnClick, wrappedOnKeyDown, disableUnselectedItems);

      return React.cloneElement(item, newProps);
    });
  }

  wrappedOnClickForItem(item, index) {
    const initialOnClick = item.props.onClick;
    return (event) => {
      if (item.props.isSelectable !== false && this.shouldHandleSelection(index)) {
        this.handleSelection(event, index);

        if (this.onChange) {
          this.onChange(event, this.state.selectedIndexes);
        }
      }

      if (initialOnClick) {
        initialOnClick(event);
      }
    };
  }

  wrappedOnKeyDownForItem(item, index) {
    const initialOnKeyDown = item.props.onKeyDown;

    return (event) => {
      if (event.nativeEvent.keyCode === KEYCODES.ENTER) {
        if (item.props.isSelectable !== false && this.shouldHandleSelection(index)) {
          this.handleSelection(event, index);
        }

        if (this.onChange) {
          this.onChange(event, this.state.selectedIndexes);
        }
      }

      if (initialOnKeyDown) {
        initialOnKeyDown(event);
      }
    };
  }

  newPropsForItem(item, index, onClick, onKeyDown, disableUnselectedItems) {
    const isSelected = this.state.selectedIndexes.indexOf(index) >= 0;

    const newProps = { onClick, onKeyDown };

    // Set the isSelected attribute to false for all the items except the items whose index is set to state selectedIndex
    if (isSelected !== item.isSelected) {
      newProps.isSelected = isSelected;
    }

    // By default isSelectable attribute for the Item is undefined, as this is selectable list,
    // we will make item selectable by default. If consumer specify the row attribute isSelectable as false,
    // then the item will not be selectable
    const isSelectable = item.props.isSelectable;
    if (isSelectable === undefined) {
      newProps.isSelectable = true;
    }

    // Add tabIndex on items to navigate through keyboard tab key for selectable litst
    if (newProps.isSelectable || isSelectable) {
      newProps.tabIndex = '0';
    }

    if (disableUnselectedItems && isSelected !== true) {
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
    const { children, isDivided, ...customProps } = this.props;
    const clonedChildItems = this.cloneChildItems(children);

    if ('onChange' in customProps) {
      delete customProps.onChange;
    }
    if ('maxSelectionCount' in customProps) {
      delete customProps.maxSelectionCount;
    }

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
