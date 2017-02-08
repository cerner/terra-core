import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/list.scss';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
  itemsSelectable: PropTypes.bool,
  isDivided: PropTypes.bool,
};

const defaultProps = {
  items: [],
  itemsSelectable: false,
  isDivided: false,
};

class List extends React.Component {

  static classesForListFromProps(isDivided, itemsSelectable) {
    return classNames(['terra-List',
      { 'terra-List-selectable': itemsSelectable },
      { 'terra-List-divided': isDivided },
    ]);
  }

  render() {
    const { items, itemsSelectable, isDivided, ...customProps } = this.props;
    const listClasses = List.classesForListFromProps(isDivided, itemsSelectable);
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
