import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './List.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * References a visible or visually hidden text element
   * on the page that conveys information about the list
   * and how to interact with it. Maps to [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).
   * Because `aria-describedby` has the most comprehensive
   * screen reader support of `aria-describedby`, `aria-description`, and
   * `aria-details`, it should be the first choice for conveying
   * List instructions to screen readers. (Note: In some screen readers,
   * including JAWS, `aria-describedby` is not supported for non-interactable
   * elements. In these cases, use `aria-details`.)
   */
  ariaDescribedBy: PropTypes.string,
  /**
    * String that provides information about the list and how to interact
    * with it. Maps to [aria-description](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description).
    * When used with `ariaDescribedBy` prop, `ariaDescribedBy`
    * takes precedence in defining the accessible description property.
    * Because `aria-description` still has limited screen reader support
    * compared to `aria-describedby`, this prop should only be used in cases where
    * `aria-describedby` is not sufficient.
    */
  ariaDescription: PropTypes.string,
  /**
   * References a visible or visually hidden text element
   * on the page that conveys information about the list
   * and how to interact with it. Maps to
   * [aria-details](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details). 
   * Can be used alongside `ariaDescribedBy` or `ariaDescription`.
   */
  ariaDetails: PropTypes.string,
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
  ariaDescribedBy,
  ariaDescription,
  ariaDetails,
  children,
  dividerStyle,
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
      {...customProps}
      {...attrSpread}
      aria-describedby={ariaDescribedBy}
      aria-description={ariaDescription} // eslint-disable-line jsx-a11y/aria-props
      aria-details={ariaDetails}
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
