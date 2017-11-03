import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './TabContainer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Indicates if the tab should be selected.
   */
  isSelected: PropTypes.bool,

  /**
   * Icon to be displayed on the tab.
   */
  icon: PropTypes.element,

  /**
   * Text to be displayed on the tab.
   */
  label: PropTypes.string.isRequired,

  /**
   * A custom display for the tab. Component will fallback to label text when collapsed into the menu.
   */
  customDisplay: PropTypes.node,

  /**
   * Content to be displayed when the tab is selected.
   */
  children: PropTypes.node,
};

const defaultProps = {
  isSelected: false,
};

const Tab = ({ isSelected, icon, label, customDisplay, children, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const tabClassNames = cx([
    'tab',
    attributes.className,
  ]);
  const tabText = <span>{label}</span>;
  return (
    <div {...attributes} className={tabClassNames}>
      {customDisplay}
      {customDisplay ? null : icon}
      {customDisplay ? null : tabText}
    </div>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
