import React from 'react';

const GridContext = React.createContext({
  role: 'table',
  // This is a callback to be supplied in the grid context provider for the aria region
  setCellAriaLiveMessage: undefined,
});

export const GridConstants = {
  GRID: 'grid',
};

export default GridContext;
