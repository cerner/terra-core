import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { withBps } from 'react-bps';
import 'terra-base/lib/baseStyles';
import styles from './Spacer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child Nodes.
   */
  children: PropTypes.node,
  /**
   * Sets the margin-top-width. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginTop: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets the margin-bottom-width. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginBottom: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets the margin-left-width. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginLeft: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets the margin-right-width. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginRight: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets the padding-top-width. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingTop: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets the padding-bottom-width. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingBottom: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets the padding-left-width. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingLeft: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets the padding-right-width. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingRight: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets the display to be inline-block
   */
  isInlineBlock: PropTypes.bool,
};

const defaultProps = {
  children: null,
  marginTop: 'none',
  marginBottom: 'none',
  marginRight: 'none',
  marginLeft: 'none',
  paddingTop: 'none',
  paddingBottom: 'none',
  paddingLeft: 'none',
  paddingRight: 'none',
  isInlineBlock: 'false',
};

const Spacer = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  isInlineBlock,
  ...customProps
 }) => {
  const attributes = Object.assign({}, customProps);
  const SpacerClassNames = cx([
    'spacer',
    { 'margin-left-none': marginLeft === 'none' },
    { 'margin-left-small-2': marginLeft === 'small-2' },
    { 'margin-left-small-1': marginLeft === 'small-1' },
    { 'margin-left-small': marginLeft === 'small' },
    { 'margin-left-medium': marginLeft === 'medium' },
    { 'margin-left-large': marginLeft === 'large' },
    { 'margin-left-large+1': marginLeft === 'large+1' },
    { 'margin-left-large+2': marginLeft === 'large+2' },
    { 'margin-left-large+3': marginLeft === 'large+3' },
    { 'margin-left-large+4': marginLeft === 'large+4' },
    attributes.className,
  ]);

  return <div {...attributes} className={SpacerClassNames} />;
};

Spacer.propTypes = propTypes;
Spacer.defaultProps = defaultProps;

export default withBps({ mobileFirst: true })(Spacer);
