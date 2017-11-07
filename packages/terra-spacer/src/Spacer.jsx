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
   * Sets top margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginTop: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets bottom margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginBottom: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets left margin One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginLeft: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets right margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginRight: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets top padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingTop: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets bottom padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingBottom: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets left padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingLeft: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets right padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingRight: PropTypes.oneOf(['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4']),
  /**
   * Sets the display to be inline-block.
   */
  isInlineBlock: PropTypes.bool,
  /**
   * Object used to determine at what window size props should be active. e.g { 768: { marginBottom: 'small-2' }}
   */
  bps: PropTypes.object,
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
  isInlineBlock: false,
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
  children,
  bps,
  ...customProps
 }) => {
  const SpacerClassNames = cx([
    'spacer',
    { 'margin-top-none': marginTop === 'none' },
    { 'margin-top-small-minus-2': marginTop === 'small-2' },
    { 'margin-top-small-minus-1': marginTop === 'small-1' },
    { 'margin-top-small': marginTop === 'small' },
    { 'margin-top-medium': marginTop === 'medium' },
    { 'margin-top-large': marginTop === 'large' },
    { 'margin-top-large-plus-1': marginTop === 'large+1' },
    { 'margin-top-large-plus-2': marginTop === 'large+2' },
    { 'margin-top-large-plus-3': marginTop === 'large+3' },
    { 'margin-top-large-plus-4': marginTop === 'large+4' },
    { 'margin-bottom-none': marginBottom === 'none' },
    { 'margin-bottom-small-minus-2': marginBottom === 'small-2' },
    { 'margin-bottom-small-minus-1': marginBottom === 'small-1' },
    { 'margin-bottom-small': marginBottom === 'small' },
    { 'margin-bottom-medium': marginBottom === 'medium' },
    { 'margin-bottom-large': marginBottom === 'large' },
    { 'margin-bottom-large-plus-1': marginBottom === 'large+1' },
    { 'margin-bottom-large-plus-2': marginBottom === 'large+2' },
    { 'margin-bottom-large-plus-3': marginBottom === 'large+3' },
    { 'margin-bottom-large-plus-4': marginBottom === 'large+4' },
    { 'margin-left-none': marginLeft === 'none' },
    { 'margin-left-small-minus-2': marginLeft === 'small-2' },
    { 'margin-left-small-minus-1': marginLeft === 'small-1' },
    { 'margin-left-small': marginLeft === 'small' },
    { 'margin-left-medium': marginLeft === 'medium' },
    { 'margin-left-large': marginLeft === 'large' },
    { 'margin-left-large-plus-1': marginLeft === 'large+1' },
    { 'margin-left-large-plus-2': marginLeft === 'large+2' },
    { 'margin-left-large-plus-3': marginLeft === 'large+3' },
    { 'margin-left-large-plus-4': marginLeft === 'large+4' },
    { 'margin-right-none': marginRight === 'none' },
    { 'margin-right-small-minus-2': marginRight === 'small-2' },
    { 'margin-right-small-minus-1': marginRight === 'small-1' },
    { 'margin-right-small': marginRight === 'small' },
    { 'margin-right-medium': marginRight === 'medium' },
    { 'margin-right-large': marginRight === 'large' },
    { 'margin-right-large-plus-1': marginRight === 'large+1' },
    { 'margin-right-large-plus-2': marginRight === 'large+2' },
    { 'margin-right-large-plus-3': marginRight === 'large+3' },
    { 'margin-right-large-plus-4': marginRight === 'large+4' },
    { 'padding-top-none': paddingTop === 'none' },
    { 'padding-top-small-minus-2': paddingTop === 'small-2' },
    { 'padding-top-small-minus-1': paddingTop === 'small-1' },
    { 'padding-top-small': paddingTop === 'small' },
    { 'padding-top-medium': paddingTop === 'medium' },
    { 'padding-top-large': paddingTop === 'large' },
    { 'padding-top-large-plus-1': paddingTop === 'large+1' },
    { 'padding-top-large-plus-2': paddingTop === 'large+2' },
    { 'padding-top-large-plus-3': paddingTop === 'large+3' },
    { 'padding-top-large-plus-4': paddingTop === 'large+4' },
    { 'padding-bottom-none': paddingBottom === 'none' },
    { 'padding-bottom-small-minus-2': paddingBottom === 'small-2' },
    { 'padding-bottom-small-minus-1': paddingBottom === 'small-1' },
    { 'padding-bottom-small': paddingBottom === 'small' },
    { 'padding-bottom-medium': paddingBottom === 'medium' },
    { 'padding-bottom-large': paddingBottom === 'large' },
    { 'padding-bottom-large-plus-1': paddingBottom === 'large+1' },
    { 'padding-bottom-large-plus-2': paddingBottom === 'large+2' },
    { 'padding-bottom-large-plus-3': paddingBottom === 'large+3' },
    { 'padding-bottom-large-plus-4': paddingBottom === 'large+4' },
    { 'padding-left-none': paddingLeft === 'none' },
    { 'padding-left-small-minus-2': paddingLeft === 'small-2' },
    { 'padding-left-small-minus-1': paddingLeft === 'small-1' },
    { 'padding-left-small': paddingLeft === 'small' },
    { 'padding-left-medium': paddingLeft === 'medium' },
    { 'padding-left-large': paddingLeft === 'large' },
    { 'padding-left-large-plus-1': paddingLeft === 'large+1' },
    { 'padding-left-large-plus-2': paddingLeft === 'large+2' },
    { 'padding-left-large-plus-3': paddingLeft === 'large+3' },
    { 'padding-left-large-plus-4': paddingLeft === 'large+4' },
    { 'padding-right-none': paddingRight === 'none' },
    { 'padding-right-small-minus-2': paddingRight === 'small-2' },
    { 'padding-right-small-minus-1': paddingRight === 'small-1' },
    { 'padding-right-small': paddingRight === 'small' },
    { 'padding-right-medium': paddingRight === 'medium' },
    { 'padding-right-large': paddingRight === 'large' },
    { 'padding-right-large-plus-1': paddingRight === 'large+1' },
    { 'padding-right-large-plus-2': paddingRight === 'large+2' },
    { 'padding-right-large-plus-3': paddingRight === 'large+3' },
    { 'padding-right-large-plus-4': paddingRight === 'large+4' },
    { 'is-inline-block': isInlineBlock },
    customProps.className,
  ]);

  return <div {...customProps} className={SpacerClassNames}>{children}</div>;
};

Spacer.propTypes = propTypes;
Spacer.defaultProps = defaultProps;

export default withBps({ mobileFirst: true })(Spacer);
