import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Arrange.scss';

const alignmentTypes = ['center', 'bottom', 'stretch'];
const cx = classNames.bind(styles);

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
   * The vertical orientation of all three containers. It will override the aligment of alignFitStart, alignFill and alignFitEnd if given. One of: `center`, `bottom`, `stretch`.
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
  if (fitStart === undefined && fitEnd === undefined) {
    throw new Error('At least one of the props: [fitStart, fitEnd] should be supplied.');
  }

  return (
    <div {...customProps} className={cx('arrange', customProps.className)} >
      <div className={cx('fit', align || alignFitStart)}>
        {fitStart}
      </div>
      <div className={cx('fill', align || alignFill)}>
        {fill}
      </div>
      <div className={cx('fit', align || alignFitEnd)}>
        {fitEnd}
      </div>
    </div>
  );
};

Arrange.propTypes = propTypes;

export default Arrange;
