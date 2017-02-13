import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/arrange.scss';

const alignmentTypes = ['center', 'bottom', 'stretch'];

const propTypes = {
  fitStart: PropTypes.element,
  fill: PropTypes.element.isRequired,
  fitEnd: PropTypes.element,
  align: PropTypes.oneOf(alignmentTypes),
  alignFitStart: PropTypes.oneOf(alignmentTypes),
  alignFitEnd: PropTypes.oneOf(alignmentTypes),
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
