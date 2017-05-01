import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './List.scss';
import ListItem from './ListItem';

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the child list items should have a border color applied.
   */
  isDivided: PropTypes.bool,
};

const defaultProps = {
  children: [],
  isDivided: false,
};

const List = ({
    children,
    isDivided,
    ...customProps
  }) => {
  const listClassNames = classNames([
    'terra-List',
    { 'terra-List-divided': isDivided },
    customProps.className,
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
