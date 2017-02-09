import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/list.scss';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
  itemsSelectable: PropTypes.bool,
  isDivided: PropTypes.bool,
  hasChevrons: PropTypes.bool,
};

const defaultProps = {
  items: [],
  itemsSelectable: false,
  isDivided: false,
  hasChevrons: false,
};

class List extends React.Component {

  static classesForListFromProps(isDivided, itemsSelectable, hasChevrons) {
    return classNames(['terra-List',
      { 'terra-List-selectable': itemsSelectable },
      { 'terra-List-divided': isDivided },
      { 'terra-List-chevrons': hasChevrons },
    ]);
  }

  render() {
    const { items, itemsSelectable, isDivided, hasChevrons, ...customProps } = this.props;
    const listClasses = List.classesForListFromProps(isDivided, itemsSelectable, hasChevrons);
    const listClassNames = classNames([
      listClasses,
      customProps.className,
    ]);

    return (
      <div {...customProps} className={listClassNames}>
        {items}
      </div>
    );
  }
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
