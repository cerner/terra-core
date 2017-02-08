import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/list.scss';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
  itemsSelectable: PropTypes.bool,
  isDivided: PropTypes.bool,
  hasChevrons: PropTypes.bool,
  isMultiselect: PropTypes.bool,
};

const defaultProps = {
  items: [],
  itemsSelectable: false,
  isDivided: false,
  hasChevrons: true,
  isMultiselect: false,
};

class SelectableList extends React.Component {
  static processItemSelection(items, isMultiselect) {
    const indexes = SelectableList.selectedIndexesFromItem(items, isMultiselect);

    return items.map((item, index) => {
      const newSelected = indexes.includes(index);
      const newProps = {};

      if (newSelected !== item.isSelected) {
        newProps.isSelected = newSelected;
      }

      return React.cloneElement(item, newProps);
    });
  }

  static selectedIndexesFromItem(items, isMultiselect) {
    const selectedIndexes = items.map((item, index) => {
      if (item.props.isSelected) {
        return index;
      }
      return false;
    });

    return isMultiselect ? selectedIndexes : [selectedIndexes[0]];
  }

  static classesForListFromProps(isDivided, itemsSelectable, isMultiselect) {
    return classNames(['terra-List',
      { 'terra-List-selectable': itemsSelectable },
      { 'terra-List-multi-selectable': isMultiselect },
      { 'terra-List-divided': isDivided },
    ]);
  }

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = { selections: SelectableList.selectedIndexesFromItem() };
  }

  wrapOnClicks(items) {
    return items.map((item) => {
      const previousBlock = item.props.onClick;
      const referenceThis = this;
      const wrappedBlock = (event) => {
        referenceThis.handleOnClick(event);

        if (previousBlock) {
          previousBlock(event);
        }
      };
      const newProps = { onClick: wrappedBlock };

      return React.cloneElement(item, newProps);
    });
  }

  handleOnClick(event) {
    const targetElement = event.eventTarget;
    // targetElmenet.willRecieveUpdate(isSelected: true)
    // { selections: List.selectedIndexesFromItem() }
    this.setState();
  }

  render() {
    const { items, itemsSelectable, isDivided, hasChevrons, isMultiselect, ...customProps } = this.props;
    const itemsWithSelection = SelectableList.processItemSelection(items, itemsSelectable, isMultiselect);
    const listClasses = SelectableList.classesForListFromProps(isDivided, itemsSelectable, isMultiselect);
    const listClassNames = classNames([
      listClasses,
      customProps.className,
    ]);

    return (
      <div {...customProps} className={listClassNames}>
        {itemsWithSelection}
      </div>
    );
  }
}

SelectableList.propTypes = propTypes;
SelectableList.defaultProps = defaultProps;

export default SelectableList;
