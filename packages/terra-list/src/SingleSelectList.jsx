import React, { PropTypes } from 'react';
import '../src/list.scss';
import List from './List';

const propTypes = {
  children: PropTypes.node,
  isDivided: PropTypes.bool,
  hasChevrons: PropTypes.bool,
  onChange: PropTypes.func,
};

const defaultProps = {
  children: [],
  isDivided: false,
  hasChevrons: true,
  onChange: undefined,
};

class SingleSelectList extends React.Component {

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
    this.state = { selectedIndex: SingleSelectList.selectedIndexFromItems(this.props.children) };
  }

  componentWillReceiveProps(nextProps) {
    const index = SingleSelectList.selectedIndexFromItems(nextProps.children);

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

    if (item.props.hasChevron === undefined) {
      newProps.hasChevron = this.props.hasChevrons;
    }

    return newProps;
  }

  unusedVariables(variable) {
    return variable === this;
  }

  render() {
    const { children, isDivided, hasChevrons, onChange, ...customProps } = this.props;
    const clonedChildItems = this.cloneChildItems(children);

    // Figure out how to handle this scenario.
    this.unusedVariables(onChange);
    this.unusedVariables(hasChevrons);

    return (
      <List
        isDivided={isDivided}
        {...customProps}
      >
        {clonedChildItems}
      </List>
    );
  }
}

SingleSelectList.propTypes = propTypes;
SingleSelectList.defaultProps = defaultProps;
SingleSelectList.Item = List.Item;

export default SingleSelectList;
