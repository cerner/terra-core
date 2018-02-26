import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './SectionHeader.scss';

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

const SectionHeader = ({ name, ...customProps }) => {
  const SectionHeaderClassNames = cx([
    'section-header',
    customProps.className,
  ]);

  return (<div {...customProps} className={SectionHeaderClassNames}>{name}</div>);
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;
