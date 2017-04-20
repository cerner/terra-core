import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './Arrange.scss';

const alignmentTypes = ['center', 'bottom', 'stretch'];

const propTypes = {
  /**
   * The content to display in the body of the fitStart.
   */
  fitStart: PropTypes.element,
  /**
   * The content to display in the body of the fill.
   */
  fill: PropTypes.element.isRequired,
  /**
   * The content to display in the body of the fitEnd.
   */
  fitEnd: PropTypes.element,
  /**
   * The vertical orientation of all three containers.
   * It will override the aligment of alignFitStart, alignFill and alignFitEnd if given.
   * One of: `center`, `bottom`, `stretch`.
   */
  align: PropTypes.oneOf(alignmentTypes),
  /**
   * The vertical orientation of fitStart. One of: `center`, `bottom`, `stretch`.
   */
  alignFitStart: PropTypes.oneOf(alignmentTypes),
  /**
   * The vertical orientation of fill. One of: `center`, `bottom`, `stretch`.
   */
  alignFitEnd: PropTypes.oneOf(alignmentTypes),
  /**
   * The vertical orientation of fitEnd. One of: `center`, `bottom`, `stretch`.
   */
  alignFill: PropTypes.oneOf(alignmentTypes),
};

const Arrange = ({
  fitStart,
  fill,
  fitEnd,
  align,
  alignFitStart,
  alignFill,
  alignFitEnd,
  ...customProps
  }) => {
  let alignmentFitStart = alignFitStart;
  let alignmentFill = alignFill;
  let alignmentFitEnd = alignFitEnd;

  if (align !== undefined) {
    alignmentFitStart = alignmentFitEnd = alignmentFill = align;
  }

  const arrangeClassNames = classNames('terra-Arrange', { [`${customProps.className}`]: customProps.className });

  const fitStartClass = classNames([
    'terra-Arrange-fitStart',
    { [`terra-Arrange-fitStart--${alignmentFitStart}`]: alignmentFitStart },
  ]);

  const fitEndClass = classNames([
    'terra-Arrange-fitEnd',
    { [`terra-Arrange-fitEnd--${alignmentFitEnd}`]: alignmentFitEnd },
  ]);

  const fillClass = classNames([
    'terra-Arrange-fill',
    { [`terra-Arrange-fill--${alignmentFill}`]: alignmentFill },
  ]);

  if (fitStart === undefined && fitEnd === undefined) {
    throw new Error('At least one of the props: [fitStart, fitEnd] should be supplied.');
  }

  return (
    <div {...customProps} className={arrangeClassNames} >
      <div className={fitStartClass}>
        {fitStart}
      </div>
      <div className={fillClass}>
        {fill}
      </div>
      <div className={fitEndClass}>
        {fitEnd}
      </div>
    </div>
  );
};

Arrange.propTypes = propTypes;

export default Arrange;
