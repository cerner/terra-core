import React, { PropTypes } from 'react';
import List from './List';

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

    return items.map((item, index) => {
      const wrappedOnClick = this.wrappedOnClickForItem(item, index);
      const newProps = this.newPropsForItem(item, index, wrappedOnClick, disableUnselectedItems);

      return React.cloneElement(item, newProps);
    });
  }

  wrappedOnClickForItem(item, index) {
    const initialOnClick = item.props.onClick;
    return (event) => {
      if (this.shouldHandleSelection(index)) {
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

  newPropsForItem(item, index, onClick, disableUnselectedItems) {
    const isSelected = this.state.selectedIndexes.indexOf(index) >= 0;

    let newProps = { onClick };
    if (isSelected !== item.isSelected) {
      newProps.isSelected = isSelected;
    }

    if (item.props.isSelectable === undefined) {
      newProps.isSelectable = true;
    } else if (!item.props.isSelectable) {
      newProps = {};
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

  unusedVariables(variable) {
    return variable === this;
  }

  render() {
    const { children, isDivided, onChange, maxSelectionCount, ...customProps } = this.props;
    const clonedChildItems = this.cloneChildItems(children);

    // Figure out how to handle this scenario.
    this.unusedVariables(onChange);
    this.unusedVariables(maxSelectionCount);

    return (
      <List isDivided={isDivided} {...customProps} tabIndex="0">
        {clonedChildItems}
      </List>
    );
  }
}

MultiSelectList.propTypes = propTypes;
MultiSelectList.defaultProps = defaultProps;
MultiSelectList.Item = List.Item;

export default MultiSelectList;
