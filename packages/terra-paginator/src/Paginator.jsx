import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Paginator.scss';

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

const Paginator = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const PaginatorClassNames = cx([
    'paginator',
    attributes.className,
  ]);

  return (<div {...attributes} className={PaginatorClassNames} />);
};

Paginator.propTypes = propTypes;
Paginator.defaultProps = defaultProps;

export default Paginator;
