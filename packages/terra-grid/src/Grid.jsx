import React, { PropTypes } from 'react';

import GridRow from './GridRow';
import GridColumn from './GridColumn';

import './grid.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Grid = props => (<div {...props} />);

Grid.propTypes = propTypes;
Grid.Row = GridRow;
Grid.Column = GridColumn;

export default Grid;
