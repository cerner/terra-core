import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import generateStyles from './styles';

const propTypes = {
  /**
  * The child Region components that make up the grid.
  */
  children: PropTypes.node.isRequired,
  /**
  * The layout configuration that defines the grid. Multiple layouts can be passed per mediaquery to make the grid responsive.
  */
  layouts: PropTypes.arrayOf(PropTypes.shape({
    /**
    * The column definitions of the grid. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns.
    * For IE support, verify syntax is supported here https://msdn.microsoft.com/en-us/library/hh772246(v=vs.85).aspx.
    */
    'grid-template-columns': PropTypes.string.isRequired,
    /**
    * The row definitions of the grid. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows.
    * For IE support, verify syntax is supported here https://msdn.microsoft.com/en-us/library/hh772258(v=vs.85).aspx.
    */
    'grid-template-rows': PropTypes.string.isRequired,
    /**
    * The gap to place between the columns and rows. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap.
    */
    'grid-gap': PropTypes.string,
    /**
    * The gap to place between the rows. Overrides rows in grid-gap if present. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap.
    */
    'grid-row-gap': PropTypes.string,
    /**
    * The gap to place between the columns. Overrides columns in grid-gap if present. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap.
    */
    'grid-column-gap': PropTypes.string,
    /**
    * The CSS media query to scope the layout to.
    */
    media: PropTypes.string,
    /**
    * The region definitions for the grid.
    */
    regions: PropTypes.arrayOf(PropTypes.shape({
      /**
      * The name of the region.
      */
      name: PropTypes.string.isRequired,
      /**
      * The starting column line for the region. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start.
      */
      'grid-column-start': PropTypes.number.isRequired,
      /**
      * The ending column line for the region. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end.
      */
      'grid-column-end': PropTypes.number,
      /**
      * The starting row line for the region. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start.
      */
      'grid-row-start': PropTypes.number.isRequired,
      /**
      * The ending row line for the region. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end.
      */
      'grid-row-end': PropTypes.number,
    })),
  })),
};

const DynamicGrid = ({
  layouts,
  children,
  ...customProps
}) => {
  const stylesheets = layouts
    .map(generateStyles)
    .map(StyleSheet.create);

  const layoutStyles = name => stylesheets.map(x => x[name]);
  const gridClasses = classNames(customProps.className, css(layoutStyles('grid')));

  // Clone the child regions and inject their generated styles
  return (<div className={gridClasses} {...customProps}>
    {React.Children.map(children,
     region => React.cloneElement(region, {
       styles: layoutStyles(region.props.name),
     }),
    )}
  </div>);
};

DynamicGrid.propTypes = propTypes;

export default DynamicGrid;
