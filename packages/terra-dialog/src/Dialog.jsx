import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Dialog.scss';

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

const Dialog = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const DialogClassNames = cx([
    'dialog',
    attributes.className,
  ]);

  return (<div {...attributes} className={DialogClassNames}>{name}</div>);
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;
