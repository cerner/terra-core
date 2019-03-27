import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './VisuallyHiddenText.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Text to be read to the screen reader
   */
  text: PropTypes.string,
};

const defaultProps = {
  text: undefined,
};

const VisuallyHiddenText = ({ text, ...customProps }) => {
  const VisuallyHiddenTextClassNames = cx([
    'visually-hidden-text',
    customProps.className,
  ]);

  return (<span {...customProps} className={VisuallyHiddenTextClassNames}>{text}</span>);
};

VisuallyHiddenText.propTypes = propTypes;
VisuallyHiddenText.defaultProps = defaultProps;

export default VisuallyHiddenText;
