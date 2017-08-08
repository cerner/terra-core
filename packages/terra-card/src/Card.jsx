import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Card.scss';

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

const Card = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const CardClassNames = cx([
    'card',
    attributes.className,
  ]);

  return (<div {...attributes} className={CardClassNames} />)
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
