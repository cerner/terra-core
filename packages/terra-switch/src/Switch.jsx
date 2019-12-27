import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Switch.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed as the name
   */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const Switch = ({ name, ...customProps }) => {
  const SwitchClassNames = cx([
    'switch',
    customProps.className,
  ]);

  return (<div {...customProps} className={SwitchClassNames}>{name}</div>);
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
