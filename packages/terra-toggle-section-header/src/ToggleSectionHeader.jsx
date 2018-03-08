import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ToggleSectionHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const ToggleSectionHeader = ({ name, ...customProps }) => {
  const ToggleSectionHeaderClassNames = cx([
    'toggle-section-header',
    customProps.className,
  ]);

  return (<div {...customProps} className={ToggleSectionHeaderClassNames}>{name}</div>);
};

ToggleSectionHeader.propTypes = propTypes;
ToggleSectionHeader.defaultProps = defaultProps;

export default ToggleSectionHeader;
