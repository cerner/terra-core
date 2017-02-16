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
    let selectedIndex = -1;
    for (let i = items.length - 1; i >= 0; i -= 1) {
      if (items[i].props === true) {
        selectedIndex = i;
        return false;
      }
    }

    return selectedIndex;
  }

  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.state = { selectedIndex: SingleSelectList.selectedIndexFromItems(this.props.items) };
  }

  componentWillReceiveProps(nextProps) {
    const index = SingleSelectList.selectedIndexFromItems(nextProps.items, nextProps.isMultiselect);

    if (index.length !== this.state.selectedIndex) {
      this.setState({ selectedIndexes: index });
    }
  }

  handleSelection(event, index) {
    this.setState({ selectedIndex: index });
  }

  shouldHandleSelection(index) {
    return index.length !== this.state.selectedIndex;
  }

  wrapOnClicks(items) {
    return items.map((item, index) => {
      const initialOnClick = item.props.onClick;
      const referenceThis = this;
      const wrappedOnClick = (event) => {
        if (referenceThis.shouldHandleSelection(index)) {
          referenceThis.handleSelection(event, index);

          if (referenceThis.onSelection) {
            referenceThis.onSelection(event, referenceThis.state.selectedIndex);
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
    const { items, isDivided, hasChevrons, onSelection, ...customProps } = this.props;
    const itemsWithSelection = this.wrapOnClicks(SingleSelectList.processItemSelection(items, this.state.selectedIndex));

    // Figure out how to handle this scenario.
    this.unusedVariables(onSelection);

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

SingleSelectList.propTypes = propTypes;
SingleSelectList.defaultProps = defaultProps;

export default SingleSelectList;
