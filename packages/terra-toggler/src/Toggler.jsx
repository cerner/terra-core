import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AnimateHeight from 'react-animate-height';
import 'terra-base/lib/baseStyles';
import './Toggler.scss';

const propTypes = {
  /**
   * Content in the body of the toggler component that will be expanded or collapsed
   */
  children: PropTypes.node.isRequired,
  /**
   * When set, will animate the toggler component as it is expanded or collapsed
   */
  isAnimated: PropTypes.bool,
  /**
   * Used to expand or collapse toggler content
   */
  isOpen: PropTypes.bool,
};

const defaultProps = {
  children: null,
  isAnimated: false,
  isOpen: false,
};

const Toggler = ({ isAnimated, isOpen, children, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const TogglerClassNames = classNames([
    'terra-Toggler',
    attributes.className,
  ]);
  const height = isOpen ? 'auto' : '0';
  let body;

  if (isAnimated) {
    body = (
      <AnimateHeight
        duration={250}
        height={height}
      >
        {children}
      </AnimateHeight>
    );
  } else {
    body = (
      isOpen && children
    );
  }

  return (
    <div {...attributes} className={TogglerClassNames} aria-hidden={!isOpen}>
      {body}
    </div>
  );
};

Toggler.propTypes = propTypes;
Toggler.defaultProps = defaultProps;

export default Toggler;
