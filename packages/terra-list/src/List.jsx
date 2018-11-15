import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './List.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the list's child items should have a border color applied.
   */
  isDivided: PropTypes.bool,
  /**
   * Function callback for the ref of the ul.
   */
  refCallback: PropTypes.func,
  /**
   * Accessibility role of the list, defaults to 'none'. If creating a list with selectable items, pass 'listbox'.
   */
  role: PropTypes.string,
};

const defaultProps = {
  children: [],
  isDivided: false,
  role: 'none',
};

const List = ({
  children,
  isDivided,
  refCallback,
  role,
  ...customProps
}) => {
  const listClassNames = cx([
    'list',
    customProps.className,
  ]);

  const attrSpread = {};
  if (role && role.length > 0 && role !== 'none') {
    attrSpread.role = role;
  }
  if (isDivided) {
    attrSpread['data-list-items-divided'] = isDivided;
  }

  return (
    <ul {...customProps} {...attrSpread} className={listClassNames} ref={refCallback}>
      {children}
    </ul>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
