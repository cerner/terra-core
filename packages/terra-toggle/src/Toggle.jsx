import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AnimateHeight from 'react-animate-height';
import 'terra-base/lib/baseStyles';
import styles from './Toggle.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content in the body of the toggle component that will be expanded or collapsed
   */
  children: PropTypes.node.isRequired,
  /**
   * When set, will animate the toggle component as it is expanded or collapsed
   */
  isAnimated: PropTypes.bool,
  /**
   * Used to expand or collapse toggle content
   */
  isOpen: PropTypes.bool,
};

const defaultProps = {
  children: null,
  isAnimated: false,
  isOpen: false,
};

const Toggle = ({ isAnimated, isOpen, children, ...customProps }) => {
  const height = isOpen ? 'auto' : '0';
  let body;

  if (isAnimated) {
    body = (
      <AnimateHeight duration={250} height={height}>
        {children}
      </AnimateHeight>
    );
  } else {
    body = (isOpen && children);
  }

  return (
    <div
      {...customProps}
      className={cx('toggle', customProps.className)}
      aria-hidden={!isOpen}
    >
      {body}
    </div>
  );
};

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
