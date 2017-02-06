import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/list.scss';

class List extends React.Component {

  static processItemSelection(items, multiselect) {
    return [];
  }

  static classesForListFromProps(divided, chevrons, numberOfColumns) {
    return '';
  }

  render() {
    const itemsWithSelection = List.processItemSelection(this.props.items,
                                                         this.props.itemsSelectable,
                                                         this.props.isMultiselect);
    const listClasses = List.classesForListFromProps(this.props.isDivided,
                                                     this.props.hasChevrons,
                                                     this.props.numberOfColumns);
    const listAttributes = Object.assign({}, this.props.attributes);
    listAttributes.className = classNames([
      listClasses,
      listAttributes.className,
    ]);

    return (
      <div {...listAttributes}>
        {itemsWithSelection.map(item  => { item })}
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
  itemsSelectable: PropTypes.bool,
  isDivided: PropTypes.bool,
  hasChevrons: PropTypes.bool,
  isMultiselect: PropTypes.bool,
  numberOfColumns: PropTypes.number,
  attributes: PropTypes.oneOfType([PropTypes.object]),
};

List.defaultProps = {
  items: [],
  itemsSelectable: false,
  isDivided: false,
  hasChevrons: true,
  isMultiselect: false,
  numberOfColumns: 1,
  attributes: {},
};

export default List;
