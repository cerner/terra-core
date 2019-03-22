
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import classNames from 'classnames/bind';
import styles from './DynamicGrid.module.scss';
import style from './Region.module.scss';
import { region } from './styles';

const cx = classNames.bind(style);

const positionShape = {
  /**
  * The starting column line for the region. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start.
  */
  'grid-column-start': PropTypes.number,
  /**
  * The ending column line for the region. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end.
  */
  'grid-column-end': PropTypes.number,
  /**
  * The starting row line for the region. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start.
  */
  'grid-row-start': PropTypes.number,
  /**
  * The ending row line for the region. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end.
  */
  'grid-row-end': PropTypes.number,

  /**
  * Additional CSS properties to apply to the region.
  */
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

const propTypes = {
  /**
   * The children of the region.
   */
  children: PropTypes.node,

  /*
  * The default position to use.
  */
  defaultPosition: PropTypes.shape(positionShape),

  /*
  *  The template to be used at tiny breakpoints
  */
  tiny: PropTypes.shape(positionShape),

  /*
  *  The template to be used at small breakpoints
  */
  small: PropTypes.shape(positionShape),

  /*
  *  The template to be used at medium breakpoints
  */
  medium: PropTypes.shape(positionShape),

  /*
  *  The template to be used at large breakpoints
  */
  large: PropTypes.shape(positionShape),

  /*
  *  The template to be used at huge breakpoints
  */
  huge: PropTypes.shape(positionShape),
};

const defaultProps = {
  defaultPosition: {},
  tiny: {},
  small: {},
  medium: {},
  large: {},
  huge: {},
};

const Region = ({
  children,
  defaultPosition,
  tiny,
  small,
  medium,
  large,
  huge,
  ...customProps
}) => {
  const media = (breakpoint, props) => (Object.keys(props).length
    ? { [`@media screen and (min-width: ${breakpoint})`]: region(props) }
    : {});

  const stylesheet = StyleSheet.create({
    region: {
      ...region(defaultPosition),
      ...media(styles.tiny, tiny),
      ...media(styles.small, small),
      ...media(styles.medium, medium),
      ...media(styles.large, large),
      ...media(styles.huge, huge),
    },
  });

  const regionClasses = classNames(customProps.className, css(stylesheet.region));
  return (
    <div {...customProps} className={regionClasses}>
      <div className={cx('region-child-container')}>
        {children}
      </div>
    </div>
  );
};

Region.propTypes = propTypes;
Region.defaultProps = defaultProps;

export default Region;
