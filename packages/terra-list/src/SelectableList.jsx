import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import List from './List';
import SelectableUtils from './SelectableUtils';

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
   * Whether or not the child list items should have a border color applied.
   */
  disableUnselectedItems: PropTypes.bool,
  /**
   * Whether or not the child list items has a disclosure indicator presented.
   */
  hasChevrons: PropTypes.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  selectedIndexes: PropTypes.array,
};

const defaultProps = {
  children: [],
  disableUnselectedItems: false,
  isDivided: false,
  hasChevrons: false,
  onChange: undefined,
  selectedIndexes: [],
};

class SelectableList extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event, index) {
    if (this.props.onChange) {
      this.props.onChange(event, index);
    }
  }

  cloneChildItems(items) {
    return React.Children.map(items, (child, index) => {
      const wrappedOnClick = this.wrappedOnClickForItem(child, index);
      const wrappedOnKeyDown = this.wrappedOnKeyDownForItem(child, index);
      const newProps = this.newPropsForItem(child, index, wrappedOnClick, wrappedOnKeyDown);

      return React.cloneElement(child, newProps);
    });
  }

  wrappedOnClickForItem(item, index) {
    const initialOnClick = item.props.onClick;

    return (event) => {
      // The default isSelectable attribute is either undefined or true, unless the consumer specifies the item isSelectable attribute as false.
      if (item.props.isSelectable !== false) {
        this.handleOnChange(event, index);
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
        if (item.props.isSelectable !== false) {
          this.handleOnChange(event, index);
        }
      }

      if (initialOnKeyDown) {
        initialOnKeyDown(event);
      }
    };
  }

  newPropsForItem(item, index, onClick, onKeyDown) {
    const isSelected = this.props.selectedIndexes.indexOf(index) >= 0;

    return SelectableUtils.newPropsForItem(item, index, onClick, onKeyDown, isSelected, this.props.hasChevrons, this.props.disableUnselectedItems);
  }

  render() {
    const { children, disableUnselectedItems, isDivided, onChange, hasChevrons, selectedIndexes, ...customProps } = this.props;
    const clonedChildItems = this.cloneChildItems(children);

    return (
      <List isDivided={isDivided} {...customProps}>
        {clonedChildItems}
      </List>
    );
  }
}

SelectableList.propTypes = propTypes;
SelectableList.defaultProps = defaultProps;
SelectableList.Item = List.Item;
SelectableList.Utils = SelectableUtils;

export default SelectableList;
