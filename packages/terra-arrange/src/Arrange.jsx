import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Arrange.module.scss';

const AlignmentTypes = {
  CENTER: 'center',
  BOTTOM: 'bottom',
  STRETCH: 'stretch',
};

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
   * The vertical orientation of all three containers. It will override the alignment of alignFitStart, alignFill and alignFitEnd if given. One of: `center`, `bottom`, `stretch`.
   */
  align: PropTypes.oneOf(['center', 'bottom', 'stretch']),
  /**
   * The vertical orientation of fitStart. One of: `center`, `bottom`, `stretch`.
   */
  alignFitStart: PropTypes.oneOf(['center', 'bottom', 'stretch']),
  /**
   * The vertical orientation of fitEnd. One of: `center`, `bottom`, `stretch`.
   */
  alignFitEnd: PropTypes.oneOf(['center', 'bottom', 'stretch']),
  /**
   * The vertical orientation of fill. One of: `center`, `bottom`, `stretch`.
   */
  alignFill: PropTypes.oneOf(['center', 'bottom', 'stretch']),
  /**
   * The attributes to be set on the fitStart wrapper element
   */
  // eslint-disable-next-line react/forbid-prop-types
  fitStartAttributes: PropTypes.object,
  /**
   * The attributes to be set on the fill wrapper element
   */
  // eslint-disable-next-line react/forbid-prop-types
  fillAttributes: PropTypes.object,
  /**
   * The attributes to be set on the fitEnd wrapper element
   */
  // eslint-disable-next-line react/forbid-prop-types
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
  const fitStartProps = { ...fitStartAttributes };
  const fillProps = { ...fillAttributes };
  const fitEndProps = { ...fitEndAttributes };

  return (
    <span {...customProps} className={cx('arrange', customProps.className)}>
      <span {...fitStartProps} className={cx('fit', align || alignFitStart, fitStartProps.className || 'fit-block')}>
        {fitStart}
      </span>
      <span {...fillProps} className={cx('fill', align || alignFill, fillProps.className || 'fill-block')}>
        {fill}
      </span>
      <span {...fitEndProps} className={cx('fit', align || alignFitEnd, fitEndProps.className)}>
        {fitEnd}
      </span>
    </span>
  );
};

Arrange.propTypes = propTypes;

export default Arrange;
export { AlignmentTypes };
