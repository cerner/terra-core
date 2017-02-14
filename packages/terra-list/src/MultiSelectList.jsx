import React, { PropTypes } from 'react';
import '../src/list.scss';
import List from './List';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
  isDivided: PropTypes.bool,
};

const defaultProps = {
  items: [],
  isDivided: false,
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

  static selectedIndexesFromItems(items) {
    const selectedIndexes = items.map((item, index) => {
      if (item.props.isSelected) {
        return index;
      }
      return false;
    });

    return selectedIndexes;
  }

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = { selectedIndexes: MultiSelectList.selectedIndexesFromItems(this.props.items) };
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

  handleOnClick(event, index) {
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

    if (this.shouldUpdateIndexes(newIndexes)) {
      this.setState({ selectedIndexes: newIndexes });
    }
  }

  wrapOnClicks(items) {
    return items.map((item, index) => {
      const previousBlock = item.props.onClick;
      const referenceThis = this;
      const wrappedBlock = (event) => {
        referenceThis.handleOnClick(event, index);

        if (previousBlock) {
          previousBlock(event);
        }
      };
      const newProps = { onClick: wrappedBlock };

      return React.cloneElement(item, newProps);
    });
  }

  render() {
    const { items, isDivided, ...customProps } = this.props;
    const itemsWithSelection = this.wrapOnClicks(MultiSelectList.processItemSelection(items, this.state.selectedIndexes));

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
