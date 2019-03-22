import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Spacer.module.scss';

import { mapShorthandToObject, shorthandValidator } from './_spacerShorthandUtils';
import { SpacerSizes, SpacerClassMappings } from './_spacerConstants';

const cx = classNames.bind(styles);

/*
  NOTE: this is needed in order to ensure that the types `marginTop`, `marginRight`, `paddingTop`, `paddingRight`, etc. are recognized by terra-props-table
  as defined. Currently, simply putting `Object.values(SpacerSizes)` causes all other `marginX` and `paddingX` props to be recognized as `undefined`
  in the PropsTable.
*/
const arrayOfSpacerSizes = [...Object.values(SpacerSizes)];

const propTypes = {
  /**
   * Child Nodes.
   */
  children: PropTypes.node.isRequired,
  /**
   * Sets margin in a syntax similar to the standard CSS spec https://developer.mozilla.org/en-US/docs/Web/CSS/margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  margin: shorthandValidator,
  /**
   * Sets top margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginTop: PropTypes.oneOf(arrayOfSpacerSizes),
  /**
   * Sets bottom margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginBottom: PropTypes.oneOf(arrayOfSpacerSizes),
  /**
   * Sets left margin One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginLeft: PropTypes.oneOf(arrayOfSpacerSizes),
  /**
   * Sets right margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginRight: PropTypes.oneOf(arrayOfSpacerSizes),
  /**
   * Sets padding in a syntax similar to the standard CSS spec https://developer.mozilla.org/en-US/docs/Web/CSS/padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  padding: shorthandValidator,
  /**
   * Sets top padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingTop: PropTypes.oneOf(arrayOfSpacerSizes),
  /**
   * Sets bottom padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingBottom: PropTypes.oneOf(arrayOfSpacerSizes),
  /**
   * Sets left padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingLeft: PropTypes.oneOf(arrayOfSpacerSizes),
  /**
   * Sets right padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingRight: PropTypes.oneOf(arrayOfSpacerSizes),
  /**
   * Sets the display to be inline-block.
   */
  isInlineBlock: PropTypes.bool,
};

const defaultProps = {
  margin: undefined,
  marginTop: SpacerSizes.NONE,
  marginBottom: SpacerSizes.NONE,
  marginRight: SpacerSizes.NONE,
  marginLeft: SpacerSizes.NONE,
  padding: undefined,
  paddingTop: SpacerSizes.NONE,
  paddingBottom: SpacerSizes.NONE,
  paddingLeft: SpacerSizes.NONE,
  paddingRight: SpacerSizes.NONE,
  isInlineBlock: false,
};

const Spacer = ({
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  isInlineBlock,
  children,
  ...customProps
}) => {
  const marginShorthand = margin ? mapShorthandToObject('margin', margin) : {};
  const paddingShorthand = padding ? mapShorthandToObject('padding', padding) : {};

  const marginAttributes = {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    ...marginShorthand,
  };

  const paddingAttributes = {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    ...paddingShorthand,
  };

  const SpacerClassNames = cx([
    `margin-top-${SpacerClassMappings[marginAttributes.marginTop]}`,
    `margin-bottom-${SpacerClassMappings[marginAttributes.marginBottom]}`,
    `margin-left-${SpacerClassMappings[marginAttributes.marginLeft]}`,
    `margin-right-${SpacerClassMappings[marginAttributes.marginRight]}`,
    `padding-top-${SpacerClassMappings[paddingAttributes.paddingTop]}`,
    `padding-bottom-${SpacerClassMappings[paddingAttributes.paddingBottom]}`,
    `padding-left-${SpacerClassMappings[paddingAttributes.paddingLeft]}`,
    `padding-right-${SpacerClassMappings[paddingAttributes.paddingRight]}`,
    { 'is-inline-block': isInlineBlock },
    customProps.className,
  ]);

  return <div {...customProps} className={SpacerClassNames}>{children}</div>;
};

const opts = {
  Sizes: SpacerSizes,
};

Spacer.propTypes = propTypes;
Spacer.defaultProps = defaultProps;
Spacer.Opts = opts;

export default Spacer;
