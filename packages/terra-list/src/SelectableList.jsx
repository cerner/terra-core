import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import List from './List';
import SelectableUtils from './SelectableUtils';
import Section from './Section';

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
   * Whether or not the child items are represented with header and list-items.
   */
  hasSections: PropTypes.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
  /**
   * An array of the currectly selected indexes.
   */
  // eslint-disable-next-line react/forbid-prop-types
  selectedIndexes: PropTypes.array,
};

const defaultProps = {
  children: [],
  disableUnselectedItems: false,
  isDivided: false,
  hasChevrons: false,
  hasSections: false,
  onChange: undefined,
  selectedIndexes: [],
};

class SelectableList extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.hasSections !== state.hasSections) {
      return {
        hasSections: props.hasSections,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      hasSections: false,
    };
  }

  render() {
    const {
      children,
      disableUnselectedItems,
      isDivided,
      onChange,
      hasChevrons,
      hasSections,
      selectedIndexes,
      ...customProps
    } = this.props;

    let clonedChildren = null;

    if (!this.state.hasSections) {
      clonedChildren = React.Children.map(children, (child, index) => {
        const wrappedOnClick = SelectableUtils.wrappedOnClickForItem(child, index, onChange);
        const wrappedOnKeyDown = SelectableUtils.wrappedOnKeyDownForItem(child, index, onChange);
        const newProps = SelectableUtils.newPropsForItem(child, index, wrappedOnClick, wrappedOnKeyDown, hasChevrons, selectedIndexes, disableUnselectedItems);
        return React.cloneElement(child, newProps);
      });
    } else {
      clonedChildren = React.Children.map(children, (section, sectionIndex) => {
        const sectionListItems = section.props.listItems;
        const clonedListItems = sectionListItems.map((listItem, listIndex) => {
          const index = `${sectionIndex}`.concat('-').concat(listIndex);
          const wrappedOnClick = SelectableUtils.wrappedOnClickForItem(listItem, index, onChange);
          const wrappedOnKeyDown = SelectableUtils.wrappedOnKeyDownForItem(listItem, index, onChange);
          const newProps = SelectableUtils.newPropsForItem(listItem, index, wrappedOnClick, wrappedOnKeyDown, hasChevrons, selectedIndexes, disableUnselectedItems);
          return React.cloneElement(listItem, newProps);
        });
        const newProps = SelectableUtils.newPropsForSection(section, sectionIndex, clonedListItems);
        return React.cloneElement(section, newProps);
      });
    }

    return (
      <List isDivided={isDivided} role="listbox" {...customProps}>
        { clonedChildren }
      </List>
    );
  }
}

SelectableList.propTypes = propTypes;
SelectableList.defaultProps = defaultProps;
SelectableList.Item = List.Item;
SelectableList.Utils = SelectableUtils;
SelectableList.Section = Section;

export default SelectableList;
