import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './List.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the list's child items should have a border color applied.
   * One of `'none'`, `'standard'`, `'bottom-only'`.
   */
  dividerStyle: PropTypes.oneOf(['none', 'standard', 'bottom-only']),
  /**
   * References the visible or visually hidden text element
   * on the page that conveys information about the list
   * and how to interact with it.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * String that provides information about the list and how to interact
   * with it.
   */
  ariaDescription: PropTypes.string,
  /**
   * The padding styling to apply to the child list item content.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
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
  dividerStyle: 'none',
  paddingStyle: 'none',
  role: 'none',
};

const List = ({
  children,
  dividerStyle,
  ariaDescribedBy,
  ariaDescription,
  paddingStyle,
  refCallback,
  role,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const listClassNames = classNames(
    cx(
      'list',
      { 'padding-standard': paddingStyle === 'standard' },
      { 'padding-compact': paddingStyle === 'compact' },
      { 'divider-standard': dividerStyle === 'standard' },
      { 'divider-bottom-only': dividerStyle === 'bottom-only' },
      theme.className,
    ),
    customProps.className,
  );

  const attrSpread = {};
  attrSpread.role = 'list'; // Explicitly set role='list' as it's missing in Safari
  if (role && role.length > 0 && role !== 'none') {
    attrSpread.role = role;
  }

  return (
    <ul
      aria-describedby={ariaDescribedBy}
      aria-description={ariaDescription} // eslint-disable-line jsx-a11y/aria-props
      {...customProps}
      {...attrSpread}
      className={listClassNames}
      ref={refCallback}
    >
      {children}
    </ul>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
