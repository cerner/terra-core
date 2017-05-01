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
   * Whether or not the child list items has a disclosure indicator presented.
   */
  hasChevrons: PropTypes.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
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
      if (items[i].props.isSelected === true && items[i].props.isSelectable !== false) {
        return i;
      }
    }
    return -1;
  }

  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.shouldHandleSelection = this.shouldHandleSelection.bind(this);
    this.state = { selectedIndex: SingleSelectList.selectedIndexFromItems(this.props.children) };
  }

  componentWillReceiveProps(nextProps) {
    const index = SingleSelectList.selectedIndexFromItems(nextProps.children);

    if (index !== this.state.selectedIndex) {
      this.setState({ selectedIndex: index });
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
      const wrappedOnKeyDown = this.wrappedOnKeyDownForItem(item, index);
      const newProps = this.newPropsForItem(item, index, wrappedOnClick, wrappedOnKeyDown);

      return React.cloneElement(item, newProps);
    });
  }

  wrappedOnClickForItem(item, index) {
    const initialOnClick = item.props.onClick;

    return (event) => {
      if (item.props.isSelectable !== false && this.shouldHandleSelection(index)) {
        this.handleSelection(event, index);

        if (this.onChange) {
          this.onChange(event, this.state.selectedIndex);
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
          this.onChange(event, this.state.selectedIndex);
        }
      }

      if (initialOnKeyDown) {
        initialOnKeyDown(event);
      }
    };
  }

  newPropsForItem(item, index, onClick, onKeyDown) {
    const isSelected = this.state.selectedIndex === index;

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

    if (item.props.hasChevron === undefined) {
      newProps.hasChevron = this.props.hasChevrons;
    }

    return newProps;
  }

  render() {
    const { children, isDivided, ...customProps } = this.props;
    const clonedChildItems = this.cloneChildItems(children);

    if ('onChange' in customProps) {
      delete customProps.onChange;
    }
    if ('hasChevrons' in customProps) {
      delete customProps.hasChevrons;
    }
    return (
      <List isDivided={isDivided} {...customProps}>
        {clonedChildItems}
      </List>
    );
  }
}

SingleSelectList.propTypes = propTypes;
SingleSelectList.defaultProps = defaultProps;
SingleSelectList.Item = List.Item;

export default SingleSelectList;
