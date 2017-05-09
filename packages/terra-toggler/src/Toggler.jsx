import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './Toggler.scss';

const propTypes = {
  /**
   * Child Nodes.
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Toggler = ({
  ...customProps
}) => {
  const classes = classNames([
    'terra-Toggler',
    { [`terra-Toggler--${size}`]: size },
    { [`terra-Toggler--${intent}`]: intent },
    customProps.className,
  ]);

  const textContent = text ? <span className="terra-Toggler-text">{text}</span> : null;

  const content = isReversed ? [textContent, icon, customProps.children] : [icon, textContent, customProps.children];

  return React.createElement('span', { ...customProps, className: classes }, ...content);
};

Toggler.propTypes = propTypes;
Toggler.defaultProps = defaultProps;

export default Toggler;
