import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import { grid } from './styles';
import Region from './Region';
import styles from './DynamicGrid.scss';

const templateShape = {
  /**
  * The column definitions of the grid. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns.
  * For IE support, verify syntax is supported here https://msdn.microsoft.com/en-us/library/hh772246(v=vs.85).aspx.
  */
  'grid-template-columns': PropTypes.string,
  /**
  * The row definitions of the grid. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows.
  * For IE support, verify syntax is supported here https://msdn.microsoft.com/en-us/library/hh772258(v=vs.85).aspx.
  */
  'grid-template-rows': PropTypes.string,
  /**
  * The gap to place between the columns and rows. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap.
  */
  'grid-gap': PropTypes.string,
  /**
  * Additional CSS properties to apply to the grid.
  */
  style: PropTypes.object,
};


const propTypes = {
  /**
  * The child Region components that make up the grid.
  */
  children: PropTypes.node,

  /*
  * The default grid layout template to use.
  */
  defaultTemplate: PropTypes.shape(templateShape),

  /*
  *  The template to be used at tiny breakpoints
  */
  tiny: PropTypes.shape(templateShape),

  /*
  *  The template to be used at small breakpoints
  */
  small: PropTypes.shape(templateShape),

  /*
  *  The template to be used at medium breakpoints
  */
  medium: PropTypes.shape(templateShape),

  /*
  *  The template to be used at large breakpoints
  */
  large: PropTypes.shape(templateShape),

  /*
  *  The template to be used at huge breakpoints
  */
  huge: PropTypes.shape(templateShape),
};


const defaultProps = {
  defaultTemplate: {},
  tiny: {},
  small: {},
  medium: {},
  large: {},
  huge: {},
};

const DynamicGrid = ({
  defaultTemplate,
  tiny,
  small,
  medium,
  large,
  huge,
  children,
  ...customProps
}) => {
  const media = (breakpoint, props) => (Object.keys(props).length
    ? { [`@media screen and (min-width: ${breakpoint})`]: grid(props) }
    : {});

  const stylesheet = StyleSheet.create({
    grid: {
      ...grid(defaultTemplate),
      ...media(styles.tiny, tiny),
      ...media(styles.small, small),
      ...media(styles.medium, medium),
      ...media(styles.large, large),
      ...media(styles.huge, huge),
    },
  });

  const gridClasses = classNames(customProps.className, css(stylesheet.grid));
  return (<div {...customProps} className={gridClasses}>{children}</div>);
};

DynamicGrid.propTypes = propTypes;
DynamicGrid.defaultProps = defaultProps;
DynamicGrid.Region = Region;

export default DynamicGrid;
