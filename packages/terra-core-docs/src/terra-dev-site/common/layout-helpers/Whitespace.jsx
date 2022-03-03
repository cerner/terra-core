import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import styles from './Whitespace.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Sets the height of a newline spacer, equivalent to number of lines based on lineheight, not fontsize.
   * One of `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, default is `1`.
   */
  newline: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
};

const defaultProps = {
  newline: 1,
};

const Whitespace = ({
  newline,
  ...customProps
}) => {
  const WhitespaceClassNames = classNames(
    cx(
      'whitespace',
      `newline-${newline}`,
    ),
    customProps.className,
  );

  return <div {...customProps} className={WhitespaceClassNames} aria-hidden="true" />;
};

Whitespace.propTypes = propTypes;
Whitespace.defaultProps = defaultProps;

export default Whitespace;
