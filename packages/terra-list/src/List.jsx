import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './List.scss';
import ListItem from './ListItem';

const cx = classNames.bind(styles);

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
   * Function callback for the ref of the ul.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  children: [],
  isDivided: false,
};

const List = ({
    children,
    isDivided,
    refCallback,
    ...customProps
  }) => {
  const listClassNames = cx([
    'list',
    { divided: isDivided },
    customProps.className,
  ]);

  return (
    <ul {...customProps} className={listClassNames} ref={refCallback}>
      {children}
    </ul>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
List.Item = ListItem;

export default List;
