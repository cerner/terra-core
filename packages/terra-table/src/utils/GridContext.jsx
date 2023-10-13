import React from 'react';

const GridContext = React.createContext({
  role: 'table',
  cellAriaLiveMessage: '',
  // used to set the visually hidden text region. This is a callback to be supplied in the context provider
  setCellAriaLiveMessage: undefined,
});

export const GridConstants = {
  GRID: 'grid',
};

export default GridContext;
