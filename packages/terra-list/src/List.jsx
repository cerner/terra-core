import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/list.scss';
import ListItem from './ListItem';

const propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.element),
  itemsSelectable: PropTypes.bool,
  isDivided: PropTypes.bool,
  hasChevrons: PropTypes.bool,
};

const defaultProps = {
  className: '',
  items: [],
  itemsSelectable: false,
  isDivided: false,
  hasChevrons: false,
};

const List = ({
    className,
    items,
    itemsSelectable,
    isDivided,
    hasChevrons,
    ...customProps
  }) => {
  const listClassNames = classNames([
    'terra-List',
    { 'terra-List-selectable': itemsSelectable },
    { 'terra-List-divided': isDivided },
    { 'terra-List-chevrons': hasChevrons },
    className,
  ]);

  return (
    <div {...customProps} className={listClassNames}>
      {items}
    </div>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
List.Item = ListItem;

export default List;
