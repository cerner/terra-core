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
   * The padding styling to apply to the child list item content.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
  /**
   * Function callback for the ref of the ul.
   */
  refCallback: PropTypes.func,
  /**
   * Accessibility role of the list, defaults to 'none'.
   */
  role: PropTypes.string,
  /**
   * Sets the role to `'listbox'` and provides an aria-description of whether its a single or multi-select list.
   * For multi-select lists, it sets aria-multiselectable to true.
   * One of `'none'`, `'single-select'`, `'multi-select'`.
   */
  ariaSelectionStyle: PropTypes.oneOf(['none', 'single-select', 'multi-select']),
};

const defaultProps = {
  children: [],
  dividerStyle: 'none',
  paddingStyle: 'none',
  role: 'none',
  ariaSelectionStyle: 'none',
};

const List = ({
  children,
  dividerStyle,
  paddingStyle,
  refCallback,
  role,
  ariaSelectionStyle,
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
  if (role && role.length > 0 && role !== 'none') {
    attrSpread.role = role;
  }

  if (ariaSelectionStyle) {
    const interactInstructions = 'To select or deselect items, press enter or spacebar';
    attrSpread.role = 'listbox';

    if (ariaSelectionStyle === 'single-select') {
      attrSpread['aria-label'] = `Single select list, ${interactInstructions}`;
    }

    if (ariaSelectionStyle === 'multi-select') {
      attrSpread['aria-multiselectable'] = true;
      attrSpread['aria-label'] = `Multi select list, ${interactInstructions}`;
    }
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
