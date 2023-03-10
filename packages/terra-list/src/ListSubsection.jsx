import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import SubsectionHeader from './ListSubsectionHeader';
import styles from './List.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the subsection is collapsed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Whether or not the subsection can be collapsed.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Optionally sets the heading level. One of `2`, `3`, `4`, `5`, `6`.
   */
  level: PropTypes.oneOf([2, 3, 4, 5, 6]),
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func,
  /**
   * Function callback passthrough for the ref of the section li.
   */
  refCallback: PropTypes.func,
  /**
   * Title text to be placed within the subsection header.
   */
  title: PropTypes.string.isRequired,
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
};

const defaultProps = {
  children: [],
  dividerStyle: 'none',
  paddingStyle: 'none',
  isCollapsed: false,
  isCollapsible: false,
  level: 2,
};

const ListSubsection = ({
  children,
  isCollapsed,
  isCollapsible,
  paddingStyle,
  dividerStyle,
  ...customProps
}) => {
  let sectionItems;
  if (!isCollapsible || !isCollapsed) {
    sectionItems = children;
  }

  const theme = React.useContext(ThemeContext);
  const listClassNames = classNames(
    cx(
      'list',
      { 'padding-standard': paddingStyle === 'standard' },
      { 'padding-compact': paddingStyle === 'compact' },
      { 'divider-standard': dividerStyle === 'standard' },
      { 'divider-bottom-only': dividerStyle === 'bottom-only' },
      'list-fill',
      theme.className,
    ),
  );

  return (
    <>
      <SubsectionHeader {...customProps} isCollapsible={isCollapsible} isCollapsed={isCollapsed} />
      {sectionItems && (
      <li className={cx('list-item')}>
        <ul {...customProps} className={listClassNames}>
          {sectionItems}
        </ul>
      </li>
      )}
    </>
  );
};

ListSubsection.propTypes = propTypes;
ListSubsection.defaultProps = defaultProps;

export default ListSubsection;
