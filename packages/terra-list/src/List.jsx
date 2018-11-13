import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './List.module.scss';
import Item from './ListItem';
import Section from './ListSection';
import Subsection from './ListSubsection';
import SectionHeader from './ListSectionHeader';
import SubsectionHeader from './ListSubsectionHeader';
import Utils from './ListUtils';

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
   * Accessibility role of the list, defaults to 'listbox'. If creating a read-only list, pass 'none', and no role will be added.
   */
  role: PropTypes.string,
};

const defaultProps = {
  children: [],
  isDivided: false,
  role: 'listbox',
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
export {
  Item,
  Section,
  Subsection,
  SectionHeader,
  SubsectionHeader,
  Utils,
};
