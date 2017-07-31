import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import GridRow from './GridRow';
import GridColumn from './GridColumn';

const propTypes = {
  /**
   * The component that will be displayed at row level.
   */
  children: PropTypes.node.isRequired,
};

const Grid = props => (<div {...props} />);

Grid.propTypes = propTypes;
Grid.Row = GridRow;
Grid.Column = GridColumn;

export default Grid;
