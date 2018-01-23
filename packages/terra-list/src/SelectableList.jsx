import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import List from './List';
import SelectableUtils from './SelectableUtils';

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
   * Whether or not unselected items should be disabled.
   * Helpful for enabling max row selection.
   */
  disableUnselectedItems: PropTypes.bool,
  /**
   * Whether or not the child list items has a disclosure indicator presented.
   * The behavior is intended to be used with a single selection style list, as multi selection style list should not perform disclosures.
   */
  hasChevrons: PropTypes.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
  /**
   * An array of the currectly selected indexes.
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

const SelectableList = ({
  children,
  disableUnselectedItems,
  isDivided,
  onChange,
  hasChevrons,
  selectedIndexes,
  ...customProps
}) => {
  const clonedChildren = React.Children.map(children, (child, index) => {
    const wrappedOnClick = SelectableUtils.wrappedOnClickForItem(child, index, onChange);
    const wrappedOnKeyDown = SelectableUtils.wrappedOnKeyDownForItem(child, index, onChange);
    const newProps = SelectableUtils.newPropsForItem(child, index, wrappedOnClick, wrappedOnKeyDown, hasChevrons, selectedIndexes, disableUnselectedItems);
    return React.cloneElement(child, newProps);
  });

  return (
    <List isDivided={isDivided} {...customProps}>
      {clonedChildren}
    </List>
  );
};

SelectableList.propTypes = propTypes;
SelectableList.defaultProps = defaultProps;
SelectableList.Item = List.Item;
SelectableList.Utils = SelectableUtils;

export default SelectableList;
