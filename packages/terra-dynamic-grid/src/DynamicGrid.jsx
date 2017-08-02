import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import generateStyles from './styles';

const DynamicGrid = (props) => {
  const stylesheets = props.layouts
    .map(generateStyles)
    .map(StyleSheet.create);

  const layoutStyles = name => stylesheets.map(x => x[name]);
  return (<div className={css(layoutStyles('grid'))}>
    {React.Children.map(props.children,
     region => React.cloneElement(region, {
       styles: layoutStyles(region.props.name),
     }),
    )}
  </div>);
};

DynamicGrid.propTypes = {
  children: PropTypes.node.isRequired,
  layouts: PropTypes.arrayOf(PropTypes.shape({
    'grid-template-columns': PropTypes.string.isRequired,
    'grid-template-rows': PropTypes.string.isRequired,
    'grid-gap': PropTypes.string,
    media: PropTypes.string,
    regions: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      'grid-column-start': PropTypes.number.isRequired,
      'grid-column-end': PropTypes.number,
      'grid-row-start': PropTypes.number.isRequired,
      'grid-row-end': PropTypes.number,
    })),
  })),
};


export default DynamicGrid;
