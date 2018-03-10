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
  /**
   * The attributes to be set on the fitStart wrapper element
   */
  fitStartAttributes: PropTypes.object,
  /**
   * The attributes to be set on the fill wrapper element
   */
  fillAttributes: PropTypes.object,
  /**
   * The attributes to be set on the fitEnd wrapper element
   */
  fitEndAttributes: PropTypes.object,
};

const Arrange = ({
  fitStart,
  fill,
  fitEnd,
  align,
  alignFitStart,
  alignFill,
  alignFitEnd,
  fitStartAttributes,
  fillAttributes,
  fitEndAttributes,
  ...customProps
  }) => {
  const fitStartProps = Object.assign({}, fitStartAttributes);
  const fillProps = Object.assign({}, fillAttributes);
  const fitEndProps = Object.assign({}, fitEndAttributes);

  return (
    <div {...customProps} className={cx('arrange', customProps.className)} >
      <div {...fitStartProps} className={cx('fit', align || alignFitStart, fitStartProps.className)}>
        {fitStart}
      </div>
      <div {...fillProps} className={cx('fill', align || alignFill, fillProps.className)}>
        {fill}
      </div>
      <div {...fitEndProps} className={cx('fit', align || alignFitEnd, fitEndProps.className)}>
        {fitEnd}
      </div>
    </div>
  );
};

Arrange.propTypes = propTypes;

export default Arrange;
