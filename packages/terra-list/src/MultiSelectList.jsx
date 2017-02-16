import React, { PropTypes } from 'react';
import '../src/list.scss';
import List from './List';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
  isDivided: PropTypes.bool,
  onSelection: PropTypes.func,
  maxSelectionCount: PropTypes.number,
};

const defaultProps = {
  items: [],
  isDivided: false,
  onSelection: undefined,
  maxSelectionCount: 0,
};

class MultiSelectList extends React.Component {
  static processItemSelection(items, indexes) {
    return items.map((item, index) => {
      const newSelected = indexes.includes(index);
      if (newSelected === item.isSelected) {
        return item;
      }

      return React.cloneElement(item, { isSelected: newSelected });
    });
  }

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
    this.state = { selectedIndexes: MultiSelectList.selectedIndexesFromItems(this.props.items, this.props.maxSelectionCount) };
  }

  componentWillReceiveProps(nextProps) {
    const nextIndexes = MultiSelectList.selectedIndexesFromItems(nextProps.items);

    if (this.shouldUpdateIndexes(nextIndexes)) {
      this.setState({ selectedIndexes: nextIndexes });
    }
  }

  shouldUpdateIndexes(indexes) {
    if (indexes.length !== this.state.selectedIndexes.length) {
      return true;
    }

    for (let i = indexes.length - 1; i >= 0; i -= 1) {
      if (this.state.selectedIndexes.includes(indexes[i]) !== true) {
        return true;
      }
    }

    return false;
  }

  handleSelection(event, index) {
    let newIndexes = [];
    if (this.state.selectedIndexes.length) {
      if (this.state.selectedIndexes.includes(index)) {
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
    if (this.state.selectedIndexes.length < this.props.maxSelectionCount) {
      return true;
    }
    if (this.state.selectedIndexes.includes(index)) {
      return true;
    }
    return false;
  }

  wrapOnClicks(items) {
    return items.map((item, index) => {
      const initialOnClick = item.props.onClick;
      const referenceThis = this;
      const wrappedOnClick = (event) => {
        if (referenceThis.shouldHandleSelection(index)) {
          referenceThis.handleSelection(event, index);

          if (referenceThis.onSelection) {
            referenceThis.onSelection(event, referenceThis.state.selectedIndexes);
          }
        }

        if (initialOnClick) {
          initialOnClick(event);
        }
      };

      let newProps = { onClick: wrappedOnClick };
      if (item.props.isSelectable === undefined) {
        newProps.isSelectable = true;
      } else if (!item.props.isSelectable) {
        newProps = {};
      }

      return React.cloneElement(item, newProps);
    });
  }

  unusedVariables(variable) {
    return variable === this;
  }

  render() {
    const { items, isDivided, onSelection, maxSelectionCount, ...customProps } = this.props;
    const itemsWithSelection = this.wrapOnClicks(MultiSelectList.processItemSelection(items, this.state.selectedIndexes));

    // Figure out how to handle this scenario.
    this.unusedVariables(onSelection);
    this.unusedVariables(maxSelectionCount);

    return (
      <List
        items={itemsWithSelection}
        itemsSelectable
        isDivided={isDivided}
        {...customProps}
      />
    );
  }
}

MultiSelectList.propTypes = propTypes;
MultiSelectList.defaultProps = defaultProps;

export default MultiSelectList;
