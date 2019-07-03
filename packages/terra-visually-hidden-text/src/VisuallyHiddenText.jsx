import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './VisuallyHiddenText.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Callback ref to pass into the dom element.
   */
  refCallback: PropTypes.func,
  /**
   * Text to be read to the screen reader
   */
  text: PropTypes.string,
};

const defaultProps = {
  text: undefined,
  refCallback: undefined,
};

const VisuallyHiddenText = ({ refCallback, text, ...customProps }) => {
  const VisuallyHiddenTextClassNames = cx([
    'visually-hidden-text',
    customProps.className,
  ]);

  return (<span ref={refCallback} {...customProps} className={VisuallyHiddenTextClassNames}>{text}</span>);
};

VisuallyHiddenText.propTypes = propTypes;
VisuallyHiddenText.defaultProps = defaultProps;

export default VisuallyHiddenText;
