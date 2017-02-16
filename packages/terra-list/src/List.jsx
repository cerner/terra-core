import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/list.scss';
import ListItem from './ListItem';

const propTypes = {
  className: PropTypes.optionalString,
  items: PropTypes.arrayOf(PropTypes.element),
  isDivided: PropTypes.bool,
  hasChevrons: PropTypes.bool,
};

const defaultProps = {
  className: '',
  items: [],
  isDivided: false,
  hasChevrons: false,
};

const List = ({
    className,
    items,
    isDivided,
    hasChevrons,
    ...customProps
  }) => {
  const listClassNames = classNames([
    'terra-List',
    { 'terra-List-divided': isDivided },
    { 'terra-List-chevrons': hasChevrons },
    className,
  ]);

  return (
    <ul {...customProps} className={listClassNames}>
      {items}
    </ul>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
List.Item = ListItem;

export default List;
