import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Tabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
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

const TabPane = ({
  icon,
  label,
  customDisplay,
  children,
  ...customProps
}) => {
  const attributes = Object.assign({}, customProps);
  const paneClassNames = cx([
    'tab',
    attributes.className,
  ]);

  attributes.tabIndex = '0';

  return (
    <div role="tab" {...attributes} className={paneClassNames}>
      {customDisplay}
      {customDisplay ? null : icon}
      {customDisplay ? null : label}
    </div>
  );
};

TabPane.propTypes = propTypes;

export default TabPane;
