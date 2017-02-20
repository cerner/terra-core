import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/list.scss';
import ListItem from './ListItem';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isDivided: PropTypes.bool,
};

const defaultProps = {
  className: '',
  children: [],
  isDivided: false,
};

const List = ({
    className,
    children,
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
      {children}
    </ul>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
List.Item = ListItem;

export default List;
