import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { withBps } from 'react-bps';
import 'terra-base/lib/baseStyles';
import styles from './Spacer.scss';

const cx = classNames.bind(styles);
const values = ['none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'];

const propTypes = {
  /**
   * Child Nodes.
   */
  children: PropTypes.node.isRequired,
  /**
   * Sets top margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginTop: PropTypes.oneOf(values),
  /**
   * Sets bottom margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginBottom: PropTypes.oneOf(values),
  /**
   * Sets left margin One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginLeft: PropTypes.oneOf(values),
  /**
   * Sets right margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginRight: PropTypes.oneOf(values),
  /**
   * Sets top padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingTop: PropTypes.oneOf(values),
  /**
   * Sets bottom padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingBottom: PropTypes.oneOf(values),
  /**
   * Sets left padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingLeft: PropTypes.oneOf(values),
  /**
   * Sets right padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingRight: PropTypes.oneOf(values),
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
  marginTop: 'none',
  marginBottom: 'none',
  marginRight: 'none',
  marginLeft: 'none',
  paddingTop: 'none',
  paddingBottom: 'none',
  paddingLeft: 'none',
  paddingRight: 'none',
  isInlineBlock: false,
  bps: null,
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
  const spacingSizes = {
    none: 'none',
    'small-2': 'small-minus-2',
    'small-1': 'small-minus-1',
    small: 'small',
    medium: 'medium',
    large: 'large',
    'large+1': 'large-plus-1',
    'large+2': 'large-plus-2',
    'large+3': 'large-plus-3',
    'large+4': 'large-plus-4',
  };

  const SpacerClassNames = cx([
    'spacer',
    `margin-top-${spacingSizes[marginTop]}`,
    `margin-bottom-${spacingSizes[marginBottom]}`,
    `margin-left-${spacingSizes[marginLeft]}`,
    `margin-right-${spacingSizes[marginRight]}`,
    `padding-top-${spacingSizes[paddingTop]}`,
    `padding-bottom-${spacingSizes[paddingBottom]}`,
    `padding-left-${spacingSizes[paddingLeft]}`,
    `padding-right-${spacingSizes[paddingRight]}`,
    { 'is-inline-block': isInlineBlock },
    customProps.className,
  ]);

  return <div {...customProps} className={SpacerClassNames}>{children}</div>;
};

Spacer.propTypes = propTypes;
Spacer.defaultProps = defaultProps;

export default withBps({ mobileFirst: true })(Spacer);
