import React, { PropTypes } from 'react';
import '../src/list.scss';
import List from './List';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
  isDivided: PropTypes.bool,
  hasChevrons: PropTypes.bool,
  isMultiselect: PropTypes.bool,
};

const defaultProps = {
  items: [],
  isDivided: false,
  hasChevrons: true,
  isMultiselect: false,
};

class SelectableList extends React.Component {
  static processItemSelection(items, indexes) {
    return items.map((item, index) => {
      const newSelected = indexes.includes(index);
      const newProps = {};

      if (newSelected !== item.isSelected) {
        newProps.isSelected = newSelected;
      }

      return React.cloneElement(item, newProps);
    });
  }

  static selectedIndexesFromItems(items, isMultiselect) {
    const selectedIndexes = items.map((item, index) => {
      if (item.props.isSelected) {
        return index;
      }
      return false;
    });

    return isMultiselect ? selectedIndexes : [selectedIndexes[0]];
  }

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = { selectedIndexes: SelectableList.selectedIndexesFromItems(this.props.items, this.props.isMultiselect) };
  }

  componentWillReceiveProps(nextProps) {
    const nextIndexes = SelectableList.selectedIndexesFromItems(nextProps.items, nextProps.isMultiselect);

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
    if (this.props.isMultiselect && this.state.selectedIndexes.length) {
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
    const { items, isDivided, hasChevrons, isMultiselect, ...customProps } = this.props; // more custom props to beginning
    const itemsWithSelection = this.wrapOnClicks(SelectableList.processItemSelection(items, this.state.selectedIndexes));

    console.log(isMultiselect);

    return (
      <List
        items={itemsWithSelection}
        itemsSelectable
        isDivided={isDivided}
        hasChevrons={hasChevrons}
        {...customProps}
      />
    );
  }
}

SelectableList.propTypes = propTypes;
SelectableList.defaultProps = defaultProps;

export default SelectableList;// split into multi and single
