import React, { PropTypes } from 'react';
import '../src/list.scss';
import List from './List';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
  isDivided: PropTypes.bool,
  hasChevrons: PropTypes.bool,
  onSelection: PropTypes.func,
};

const defaultProps = {
  items: [],
  isDivided: false,
  hasChevrons: true,
  onSelection: undefined,
};

class SingleSelectList extends React.Component {
  static processItemSelection(items, selectedIndex) {
    return items.map((item, index) => {
      const newSelected = (index === selectedIndex);

      if (newSelected === item.isSelected) {
        return item;
      }

      return React.cloneElement(item, { isSelected: newSelected });
    });
  }

  static selectedIndexFromItems(items) {
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].props === true) {
        return i;
      }
    }
    return -1;
  }

  static propsForItem(item, onClick) {
    let newProps = { onClick };
    if (item.props.isSelectable === undefined) {
      newProps.isSelectable = true;
    } else if (!item.props.isSelectable) {
      newProps = {};
    }

    return newProps;
  }

  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.state = { selectedIndex: SingleSelectList.selectedIndexFromItems(this.props.items) };
  }

  componentWillReceiveProps(nextProps) {
    const index = SingleSelectList.selectedIndexFromItems(nextProps.items, nextProps.isMultiselect);

    if (index !== this.state.selectedIndex) {
      this.setState({ selectedIndexes: index });
    }
  }

  handleSelection(event, index) {
    this.setState({ selectedIndex: index });
  }

  shouldHandleSelection(index) {
    return index !== this.state.selectedIndex;
  }

  cloneChildItems(items) {
    return items.map((item, index) => {
      const wrappedOnClick = this.wrappedOnClickForItem(item, index);
      const newProps = this.newPropsForItem(item, index, wrappedOnClick);

      return React.cloneElement(item, newProps);
    });
  }

  wrappedOnClickForItem(item, index) {
    const initialOnClick = item.props.onClick;
    const referenceThis = this;
    return (event) => {
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
  }

  newPropsForItem(item, index, onClick) {
    const isSelected = this.state.selectedIndex === index;

    let newProps = { onClick };
    if (isSelected !== item.isSelected) {
      newProps.isSelected = isSelected;
    }

    if (item.props.isSelectable === undefined) {
      newProps.isSelectable = true;
    } else if (!item.props.isSelectable) {
      newProps = {};
    }

    return newProps;
  }

  unusedVariables(variable) {
    return variable === this;
  }

  render() {
    const { items, isDivided, hasChevrons, onSelection, ...customProps } = this.props;
    const clonedChildItems = this.cloneChildItems(items);

    // Figure out how to handle this scenario.
    this.unusedVariables(onSelection);

    return (
      <List
        items={clonedChildItems}
        isDivided={isDivided}
        hasChevrons={hasChevrons}
        {...customProps}
      />
    );
  }
}

SingleSelectList.propTypes = propTypes;
SingleSelectList.defaultProps = defaultProps;

export default SingleSelectList;
