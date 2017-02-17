import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/list.scss';
import ListItem from './ListItem';

const propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.element),
  isDivided: PropTypes.bool,
};

const defaultProps = {
  className: '',
  items: [],
  isDivided: false,
};

const List = ({
    className,
    items,
    isDivided,
    ...customProps
  }) => {
  const listClassNames = classNames([
    'terra-List',
    { 'terra-List-divided': isDivided },
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
