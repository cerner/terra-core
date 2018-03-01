import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ActionFooter.scss';

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

const ActionFooter = ({ name, ...customProps }) => {
  const ActionFooterClassNames = cx([
    'action-footer',
    customProps.className,
  ]);

  return (<div {...customProps} className={ActionFooterClassNames}>{name}</div>);
};

ActionFooter.propTypes = propTypes;
ActionFooter.defaultProps = defaultProps;

export default ActionFooter;
